# B2B Inbound DMC Platform Specification
## Australia & New Zealand Inbound

**Date:** 2025-12-19
**Prepared For:** Horizon DMC Team
**Objective:** Design a professional, contract-only B2B agent portal for international travel agents.

---

## 1. Information Architecture (IA)

The platform is divided into three distinct zones: **Public Marketing**, **Agent Portal**, and **Admin/Operations**.

### Zone A: Public Website (Pre-Login)
*Goal: Trust, Authority, and Lead Generation.*

*   **Home**
    *   Hero (Value Prop: "Your Trusted ANZ Partner")
    *   Why Choose Us
    *   Product Snapshot
    *   Testimonials
    *   Footer (Legal/NDA)
*   **Destinations**
    *   /australia (Overview, Key Cities, Seasons)
    *   /new-zealand (Overview, Key Cities, Seasons)
*   **Products (Showcase Only - No Pricing)**
    *   /hotels
    *   /tours
    *   /transfers
    *   /groups-mice
*   **Partnership**
    *   /why-partner
    *   /register (Validation Form)
*   **Login** (Secure Gateway)

### Zone B: Agent Portal (Post-Login)
*Goal: Efficiency, Booking, and Management.*

*   **Dashboard** (Overview of business)
*   **Itinerary Builder** (The Workbench)
    *   Create New
    *   Edit Existing
*   **My Bookings**
    *   Quotes (Saved/Pending)
    *   Confirmed (Active/Travelled)
    *   Cancelled
*   **Finance**
    *   Invoices
    *   Statements
    *   Online Payment
*   **Profile**
    *   Company Settings
    *   Sub-users
    *   Branding (Logo upload for white-label PDFs)

### Zone C: Admin Panel (Internal Ops)
*Goal: Product Loading, Rate Management, Reservation Control.*

*   **Masters**: Locations, Suppliers, Currencies, Exchange Rates.
*   **Product Management**:
    *   Hotels (Rates, Allotments, Stop-sells, Promotions)
    *   Tours/Activities (Schedules, capacities)
    *   Transfers (Vehicle types, zones)
*   **Agent Management**:
    Credit limits, Markup classifications, Market assignment.
*   **Booking Management**: All agent bookings,status updates, supplier communications.
*   **Reports**: Sales, Profitability, Supplier Payables.

---

## 2. Screen-by-Screen UI Structure

### 2.1 Public: Become a Partner (Registration)
*   **Layout**: Clean, trusting, single-column form.
*   **Fields**:
    *   Company Details (Name, Address, Website, IATA/License #).
    *   Key Contact (Name, Email, Phone).
    *   Business Profile (Primary Source Markets, Estimated Pax/Year).
    *   **Document Upload**: Trade License (Required).
*   **Action**: "Submit for Approval". (Triggers manual review).

### 2.2 Agent Dashboard (Home)
*   **Layout**: 3-Column Grid.
*   **Header**: Welcome Agent Name | Current Exchange Rate (AUD/NZD to Agent Currency).
*   **Main Widgets**:
    *   *Quick Actions*: "Start New Quote", "Search Hotels".
    *   *Recent Activity*: Last 5 accessed quotes/bookings.
    *   *Alerts*: "Payment due for Ref #1234", "Stop-sell alert for Sydney".
*   **Sidebar**: Navigation (Collapsible).

### 2.3 The Itinerary Builder (Core Feature)
*   **Layout**: 3-Panel "Cockpit" Design (Full width).

    *   **Left Panel: Product Source (25%)**
        *   Tabs: Hotels | Tours | Transfers | Extras.
        *   Smart Search: "City", "Date", "Category".
        *   Result Cards: Draggable items. Small thumbnail, Name, 'From' Rate.
    
    *   **Centre Panel: Itinerary Canvas (50%)**
        *   Timeline view: Day 1, Day 2, Day 3...
        *   **Drag & Drop Zone**: Drop products here.
        *   *In-line Editing*: Click description to edit text for the client.
        *   *Day Summary*: Total km/time (if self-drive).
    
    *   **Right Panel: Costing & Settings (25%)**
        *   **Dynamic Pricing**: Lists added items with Net Cost.
        *   **Markup Controls**: Global % (e.g., 20%) or Line-item override.
        *   **Final Quote Price**: Display Agent Net vs Client Gross.
        *   **Pax Selector**: 2 Adults, 1 Child (Recalculates instantly).
        *   **Actions**: "Save as Quote", "Generate PDF", "Book Now".

### 2.4 Product Detail Modal (Hotel)
*   Trigger: Clicking a hotel in Left Panel.
*   Content: Image Gallery, Room Types table (Net Rates per season), Map, Cancellation Policy.

### 2.5 Booking Management List
*   **Table Columns**: Ref ID | Client Name | Start Date | Status (Quote/Confirmed) | Total Amount | Payment Status.
*   **Filters**: Date Range, Status.
*   **Actions**: View, Edit, Cancel, Download Voucher.

---

## 3. Feature List by Phase

### Phase 1: MVP (The Contract Engine)
*   **User Mgmt**: Agent Registration, Approval workflow, Auth.
*   **Product Loading**: Admin ability to manually load Hotel, Tour, Transfer rates (static data).
*   **Search Engine**: Basic availability check (Allocations or On-Request).
*   **Itinerary Builder**: Drag & Drop logic, multi-day structure, save to DB.
*   **Quoting**: PDF generation (Standard template), Net/Gross calculation.
*   **Booking**: "Request to Book" button (Triggers email to Ops team).
*   **Static Website**: All marketing pages.

### Phase 2: Automation & Finance (The Efficiency Layer)
*   **Live Booking**: Instant confirmation logic for items with Allotment.
*   **Documents**: Voucher generation (HTML/PDF).
*   **Finance**: Invoice generation, Stripe Integration for credit card payments.
*   **Agent Dashboard**: Widget analytics.
*   **White-labeling**: Agents can upload their logo for the client PDF.

### Phase 3: Connectivity (The Scale Layer)
*   **XML/API Integrations**: Connect to Channel Managers (SiteMinder, etc.) for dynamic hotel rates.
*   **Dynamic Inventory**: Real-time availability for Day Tours.
*   **Mobile App**: For the end-traveler to view their itinerary.

---

## 4. Suggested Database Entities (Simplified Relational Schema)

### Users & Auth
*   `Companies` (ID, Name, Type=Agent/Supplier, Market, CreditLimit)
*   `Users` (ID, CompanyID, Email, PasswordHash, Role)

### Product Catalog
*   `Locations` (ID, Name, ParentID [Sydney -> NSW -> Australia])
*   `Products` (ID, Type [Hotel/Tour], Name, Description, Images, StarRating)
*   `Product_Variations` (ID, ProductID, Name [e.g., "Deluxe Room", "Morning Tour"])

### Rates & Inventory
*   `Seasons` (ID, Name, StartDate, EndDate)
*   `Rates` (ID, VariationID, SeasonID, NetPrice, Currency)
*   `Inventory` (ID, ProductID, Date, AllotmentTotal, AllotmentUsed)

### Itinerary & Booking
*   `Itineraries` (ID, AgentID, ClientName, StartDate, PaxDetails, Status [Draft/Quote/Booked])
*   `Itinerary_Days` (ID, ItineraryID, DayNumber, Description)
*   `Itinerary_Items` (ID, DayID, ProductID, VariationID, CostPrice, SellPrice, Status)

### Finance
*   `Invoices` (ID, ItineraryID, Amount, DueDate, Status)
*   `Payments` (ID, InvoiceID, Amount, TransactionRef, Date)

---

## 5. Key User Flows

### Flow A: Registration to Approval
1.  Agent completes form on Public Site.
2.  System sets status `Pending_Review` & emails Admin.
3.  Admin checks License document off-platform.
4.  Admin clicks "Approve" & assigns "RateTier A" (Standard).
5.  System emails Agent with "Set Password" link.

### Flow B: Search -> Build -> Quote (The "Planner" Flow)
1.  Agent logs in -> Clicks "New Itinerary".
2.  Enters "Client Jones", "Oct 1 - Oct 10", "2 Pax".
3.  **Day 1**: Searches Filters "Sydney" + "Transfer". Drags "Airport Transfer" to Day 1.
4.  **Day 1-3**: Searches "Sydney" + "Hotel". Drags "Shangri-La" to Day 1 (Auto-extends for 3 nights default).
5.  **Day 2**: Searches "Sydney" + "Tours". Drags "Bridge Climb" to Day 2 afternoon.
6.  Agent reviews "Right Panel": sees Total Net AUD 2500.
7.  Agent adds 15% Markup -> Total Gross AUD 2875.
8.  kliks "Export PDF". System generates a branded PDF proposal.

### Flow C: Booking & Confirmation
1.  Client Jones accepts quote. Agent opens Itinerary.
2.  Agent clicks "Convert to Booking".
3.  **System Check**:
    *   Hotel: Available allowance? Yes -> deduct 1 -> Status `Confirmed`.
    *   Tour: On Request? -> Status `Pending Supplier`.
4.  System generates "Booking Confirmation" email to Agent.
5.  Ops Team receives alert for "Pending Supplier" items to manually confirm.

---

## 6. UX & Logic Recommendations (DMC Specific)

1.  **"Or Similar" Logic**: In B2B, hotels are often contracted by category. The UI should allow the Agent to select "Specific Hotel" OR "Run of House 4*". This gives the DMC flexibility if the specific hotel is fully booked.
2.  **Net Rate Protection**: NEVER show Net Rates on the main canvas where a client might be looking over the Agent's shoulder. Ideally, have a "Hide Net Rates" toggle shortcut (e.g., strict "Client Mode").
3.  **Seasonality Warnings**: Australia/NZ has strict blackout dates (NYE, F1 Melbourne, Australian Open). The logic must warn agents *during the build phase* if they drag a service onto a blackout date. ("Warning: Min stay 3 nights during this period").
4.  **Driver Guide vs. Coaching**: For Groups, distinguishing between "Driver Guide" (1 person) and "Coach Captain + Guide" (2 people) affects cost significantly. Make this a toggle in the transfer/tour module.
5.  **Currency Fluctuation**: Store the exchange rate *at the time of quoting*. If the agent comes back 2 months later to book, the system must alert if the exchange rate (or validity) has shifted significantly.
