/**
 * Horizon DMC - Google Apps Script Backend (V3 - Status Updates)
 * 
 * INSTRUCTIONS:
 * 1. Copy this code to your Apps Script Editor.
 * 2. Update SPREADSHEET_ID and ADMIN_EMAIL.
 * 3. Deploy/Update the Web App.
 */

const SPREADSHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
const ADMIN_EMAIL = 'admin@horizon-dmc.com';

function doPost(e) {
    try {
        const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
        const data = JSON.parse(e.postData.contents);

        // HANDLE STATUS UPDATE ACTION
        if (data.action === 'updateStatus') {
            const sheetName = data.type === 'agent' ? 'Agent Inquiries' : 'Partner Applications';
            const sheet = ss.getSheetByName(sheetName);
            if (!sheet) return errorResponse('Sheet not found');

            const values = sheet.getDataRange().getValues();
            const idColumnIndex = 1; // ID is in the second column (Index 1)
            const statusColumnIndex = data.type === 'agent' ? 9 : 10; // Agent Status: col 10 (index 9), Partner Status: col 11 (index 10)

            for (let i = 1; i < values.length; i++) {
                if (values[i][idColumnIndex] === data.id) {
                    sheet.getRange(i + 1, statusColumnIndex + 1).setValue(data.status);
                    return successResponse('Status updated');
                }
            }
            return errorResponse('ID not found');
        }

        // HANDLE NEW FORM SUBMISSION (Original Logic)
        const type = data.type;
        const userEmail = data.email;
        const userName = data.contactName;

        let sheetName = type === 'agent' ? 'Agent Inquiries' : 'Partner Applications';
        let sheet = ss.getSheetByName(sheetName);

        if (!sheet) {
            sheet = ss.insertSheet(sheetName);
            if (type === 'agent') {
                sheet.appendRow(['Date', 'ID', 'Contact Name', 'Agency Name', 'Email', 'Phone', 'Country', 'IATA No', 'Message', 'Status']);
            } else {
                sheet.appendRow(['Date', 'ID', 'Company Name', 'Country', 'License', 'Contact Name', 'Job Title', 'Email', 'Phone', 'Pax', 'Status']);
            }
            sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold').setBackground('#1a1a1a').setFontColor('#ffffff');
        }

        let row = [];
        if (type === 'agent') {
            row = [new Date().toLocaleString(), data.id, data.contactName, data.agencyName, data.email, data.phone, data.country, data.iataNo, data.message, 'New'];
        } else {
            row = [new Date().toLocaleString(), data.id, data.companyName, data.country, data.license, data.contactName, data.jobTitle, data.email, data.phone, data.pax, 'Pending'];
        }
        sheet.appendRow(row);

        // Emails (Styled) - [OMITTED FOR BREVITY IN LOG, BUT KEPT IN ACTUAL FILE]
        sendInternalEmails(data, type, userEmail, userName);

        return successResponse('Form submitted');

    } catch (error) {
        return errorResponse(error.toString());
    }
}

function successResponse(msg) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'success', message: msg }))
        .setMimeType(ContentService.MimeType.JSON);
}

function errorResponse(msg) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: msg }))
        .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const action = e.parameter.action;

    if (action === 'read') {
        const agents = getSheetData(ss, 'Agent Inquiries');
        const partners = getSheetData(ss, 'Partner Applications');

        return ContentService.createTextOutput(JSON.stringify({
            agentRequests: agents,
            partnerApplications: partners
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

function getSheetData(ss, sheetName) {
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) return [];

    const values = sheet.getDataRange().getValues();
    const headers = values[0];
    const items = [];

    for (let i = 1; i < values.length; i++) {
        const item = {};
        headers.forEach((header, index) => {
            let key = header.toLowerCase().replace(/ /g, '');
            if (header === 'Contact Name') key = 'contactName';
            if (header === 'Agency Name') key = 'agencyName';
            if (header === 'IATA No') key = 'iataNo';
            if (header === 'Company Name') key = 'companyName';
            if (header === 'Job Title') key = 'jobTitle';
            item[key] = values[i][index];
        });
        items.push(item);
    }
    return items.reverse();
}

function sendInternalEmails(data, type, userEmail, userName) {
    // Notification Email Body
    const adminHtmlBody = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #0f172a; padding: 30px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0;">New Registration</h2>
        <p style="color: #94a3b8; margin: 10px 0 0;">${type === 'agent' ? 'B2B Agent Inquiry' : 'Partner Application'}</p>
      </div>
      <div style="padding: 40px; background-color: #ffffff;">
        <table style="width: 100%; border-collapse: collapse;">
          ${Object.keys(data).filter(key => key !== 'type' && key !== 'action').map(key => `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: 600; width: 40%;">${key.replace(/([A-Z])/g, ' $1')}</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 15px;">${data[key]}</td>
            </tr>
          `).join('')}
        </table>
      </div>
    </div>
  `;

    MailApp.sendEmail({
        to: ADMIN_EMAIL,
        subject: `🚨 [HORIZON] New ${type === 'agent' ? 'Agent' : 'Partner'}: ${data.agencyName || data.companyName}`,
        htmlBody: adminHtmlBody
    });

    // User Confirmation Email Body
    const userHtmlBody = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #1a1a1a; padding: 40px; text-align: center;">
        <h1 style="color: #d4a574; margin: 0;">Horizon DMC</h1>
        <p style="color: #ffffff; margin-top: 10px; font-size: 16px;">Thank you for your interest!</p>
      </div>
      <div style="padding: 40px; background-color: #ffffff;">
        <p>Dear <strong>${userName}</strong>,</p>
        <p>We have received your application. Our team will review your details and contact you within 24 hours.</p>
        <p>Best Regards,<br><strong>Horizon Partnership Team</strong></p>
      </div>
    </div>
  `;

    MailApp.sendEmail({
        to: userEmail,
        subject: `Confirmation: Your Application with Horizon DMC [Ref: ${data.id}]`,
        htmlBody: userHtmlBody
    });
}
