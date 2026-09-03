// tally-data.js
// Excellent Institute - Tally Prime 7.0 Masterclass (DCA & PGDCA)

const tallyBookData = [
    // ==========================================
    // PART 1: DCA SYLLABUS (FOUNDATION)
    // ==========================================
    {
        id: "chapter1",
        title: "Chapter 1: What is Tally Prime?",
        topics: [
            {
                heading: "Introduction to Digital Accounting",
                text: "Tally Prime is a smart digital accountant. In the old days, shopkeepers used big red notebooks (Khatas) to write down who bought what and who paid how much. Tally replaces those notebooks. It automatically calculates your profits, tracks your stock, and generates GST bills instantly without you doing any math!",
                shortcut: "Tally is 90% keyboard-based. The mouse is rarely needed!",
                imgSrc: "images/tally-01-intro.jpg"
            },
            {
                heading: "The Tally Prime 7.0 Interface",
                text: "When you open Tally Prime, you see the 'Gateway of Tally' in the center—this is your main steering wheel. At the very top, there is a modern Top Menu Bar (Company, Data, Exchange, Print) which you access using the 'Alt' key. For example, press Alt+K to open the Company menu.",
                shortcut: "Alt + K (Opens the top Company Menu)",
                imgSrc: "images/tally-02-interface.jpg"
            },
            {
                heading: "The Magic 'Go To' Button",
                text: "Tally Prime 7.0 has a magical search bar in the top middle called 'Go To'. If you are doing data entry and suddenly your boss asks to see the Balance Sheet, you don't need to close your work! Just press Alt+G, type 'Balance Sheet', view it, and then press Escape to return right back to where you were typing.",
                shortcut: "Alt + G (The universal search button in Tally Prime)",
                imgSrc: "images/tally-03-goto.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Create Company",
        topics: [
            {
                heading: "Setting Up Your Digital Business",
                text: "Before doing anything, you must create a digital file for your business. Go to Gateway of Tally > Create Company (or press Alt+K > Create). Type your Institute's name, address, and select the State (Odisha). Selecting the correct State is extremely important, otherwise, Tally cannot calculate the correct GST!",
                shortcut: "Financial Year always begins on 1st April.",
                imgSrc: "images/tally-04-create-company.jpg"
            },
            {
                heading: "F11: Company Features",
                text: "The moment you save your new company, Tally shows the 'F11 Features' screen. This is where you turn on the superpower switches for your company. You must set 'Maintain Accounts' to Yes, 'Maintain Inventory' to Yes, and 'Enable GST' to Yes. Press Ctrl+A to save the screen quickly.",
                shortcut: "Ctrl + A (Instantly saves and accepts any screen in Tally)",
                imgSrc: "images/tally-05-f11-features.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Ledger Creation",
        topics: [
            {
                heading: "What is a Ledger?",
                text: "A Ledger is an individual diary for one specific person or thing. If Rahul buys goods from you, you need a 'Rahul Ledger'. If you deposit money in SBI, you need an 'SBI Bank Ledger'. Tally provides two ledgers for free automatically: 'Cash' and 'Profit & Loss A/c'.",
                shortcut: "Gateway of Tally > Create > Ledger",
                imgSrc: "images/tally-06-ledgers.jpg"
            },
            {
                heading: "Creating Basic Ledgers & Groups",
                text: "When you create a Ledger, Tally asks 'Under which Group?'. A Group tells Tally how to treat the diary. Go to Create > Ledger. \n- Create 'Sales A/c' under Sales Accounts.\n- Create 'SBI Bank' under Bank Accounts.\n- Create a customer name under 'Sundry Debtors'. Press Ctrl+A to save each one.",
                shortcut: "Gateway of Tally > Alter > Ledger (To fix spelling mistakes)",
                imgSrc: "images/tally-07-basic-ledgers.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: GST Entries & Printing Invoices",
        topics: [
            {
                heading: "Creating Tax Ledgers (CGST & SGST)",
                text: "To charge GST, you must create two special ledgers: 'CGST' and 'SGST'. Go to Create > Ledger. Put them under the Group 'Duties & Taxes'. Select the Type of Duty as 'GST'. Tally will now use these ledgers to automatically calculate tax on your bills.",
                shortcut: "CGST and SGST are used for sales within your own state.",
                imgSrc: "images/tally-08-tax-ledgers.jpg"
            },
            {
                heading: "Sales Voucher (F8) with GST",
                text: "When you sell items to a customer, go to Vouchers and press F8. Select the Party (Customer Ledger), select Sales A/c, and type the item name and price. At the bottom of the bill, select your CGST and SGST ledgers. Tally calculates the tax instantly. Press Ctrl+A to save the sale.",
                shortcut: "F8 = Generating a Sales bill for your customer",
                imgSrc: "images/tally-09-sales-gst.jpg"
            },
            {
                heading: "Printing the Tax Invoice",
                text: "Immediately after saving a Sales Voucher, press 'Page Up' on your keyboard to look at it again. Press Ctrl+P (Print Current). Click 'Preview' (or press I). You will see a beautiful, professional Tax Invoice with your company name, GST numbers, and total amount, ready to be printed!",
                shortcut: "Ctrl + P > I (To preview the printable bill)",
                imgSrc: "images/tally-10-print-invoice.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: View Reports & Balance Sheet",
        topics: [
            {
                heading: "Viewing Simple Reports",
                text: "You don't need to do math to see how your business is doing. Go to Gateway of Tally > Profit & Loss A/c. The left side shows all your expenses, and the right side shows your sales income. At the bottom, it clearly shows your 'Net Profit'.",
                shortcut: "Press Alt+F5 to expand the report to see full details.",
                imgSrc: "images/tally-11-pnl.jpg"
            },
            {
                heading: "The Simple Balance Sheet",
                text: "The Balance Sheet is the health report of the business. Go to Gateway of Tally > Balance Sheet. It shows 'Liabilities' (Left side: capital and loans you owe) and 'Assets' (Right side: cash in hand, bank balance, computers you own). Both sides must always have the exact same total amount!",
                shortcut: "Alt + G > type 'Balance Sheet' (To jump to it from anywhere)",
                imgSrc: "images/tally-12-balance-sheet.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Payroll Basics",
        topics: [
            {
                heading: "What is Payroll?",
                text: "Payroll is the system used to pay salaries to staff. In Tally Prime, press F11 and set 'Maintain Payroll' to Yes. This unlocks the ability to create employee names and track their basic monthly pay without using Excel.",
                shortcut: "F11 > Maintain Payroll > Yes",
                imgSrc: "images/tally-13-payroll-intro.jpg"
            },
            {
                heading: "Creating Employees",
                text: "Go to Gateway of Tally > Create > Show More > Employee. Here you can enter your teacher or staff member's name, their joining date, blood group, and bank account details for basic record-keeping.",
                shortcut: "Creating employees helps organize the business's human resources.",
                imgSrc: "images/tally-14-create-employee.jpg"
            }
        ]
    },

    // ==========================================
    // PART 2: PGDCA EXCLUSIVE SYLLABUS (ADVANCED)
    // ==========================================
    {
        id: "chapter7",
        title: "Chapter 7: PGDCA - Advanced Voucher Entries",
        topics: [
            {
                heading: "Payment (F5) & Receipt (F6)",
                text: "Press F6 for a Receipt Voucher. Use this ONLY when money is coming INTO your business (like a student paying fees). Press F5 for a Payment Voucher. Use this ONLY when money is going OUT of your business (like paying rent or electricity bills).",
                shortcut: "F5 = Money Out | F6 = Money In",
                imgSrc: "images/tally-15-receipt-payment.jpg"
            },
            {
                heading: "Contra Voucher (F4)",
                text: "Press F4 for Contra. This is a special voucher used ONLY for moving your own money from your left pocket to your right pocket! Examples: Depositing cash into your SBI Bank, or withdrawing cash from the ATM for office use. No outside person is involved in a Contra entry.",
                shortcut: "F4 = Cash to Bank OR Bank to Cash ONLY",
                imgSrc: "images/tally-16-contra.jpg"
            },
            {
                heading: "Journal Voucher (F7)",
                text: "Press F7 for Journal. This is an adjustment voucher where NO cash or bank money moves. We use it for credit transactions (like buying a Computer on loan from a shop) or calculating depreciation (loss of value) on old furniture.",
                shortcut: "F7 = Non-Cash Adjustments",
                imgSrc: "images/tally-17-journal.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: PGDCA - Inventory & Stock Management",
        topics: [
            {
                heading: "Units of Measure (UQC)",
                text: "Tally needs to know how you count your items. Go to Create > Unit. Type the symbol 'NOS' and formal name 'Numbers'. For proper GST billing, you must select the official UQC (Unique Quantity Code) as 'NOS-NUMBERS' from the dropdown list.",
                shortcut: "Gateway of Tally > Create > Unit",
                imgSrc: "images/tally-18-units.jpg"
            },
            {
                heading: "Stock Groups & Items",
                text: "A Stock Group is a category (like 'Electronics'). A Stock Item is the actual product (like 'Dell Mouse'). Go to Create > Stock Item. Name it 'Dell Mouse', put it under 'Electronics', choose 'NOS' as the unit, and press Ctrl+A to save. Now Tally can track exactly how many mice you have in your godown!",
                shortcut: "Gateway of Tally > Create > Stock Item",
                imgSrc: "images/tally-19-stock.jpg"
            }
        ]
    },
    {
        id: "chapter9",
        title: "Chapter 9: PGDCA - GST Configuration & Returns",
        topics: [
            {
                heading: "Advanced GST Setup",
                text: "Press F11, go to 'Enable GST' and type 'Yes'. You must carefully select your Registration Type (Regular/Composition) and type your exact 15-digit GSTIN number. If you transport goods worth more than ₹50,000, you must also set 'e-Way Bill' to Yes in this screen.",
                shortcut: "F11 > Enable Goods and Services Tax (GST) > Yes",
                imgSrc: "images/tally-20-enable-gst.jpg"
            },
            {
                heading: "Filing GST Returns (GSTR-1 & 3B)",
                text: "Tally Prime automatically prepares your government tax returns! Press Alt+G and type 'GSTR-1'. This report shows all the sales you made. Type 'GSTR-3B' to see your final tax liability (how much tax you owe the government). You can export these reports directly to the GST Portal in JSON format.",
                shortcut: "Alt + G > type 'GSTR-1'",
                imgSrc: "images/tally-21-gstr.jpg"
            }
        ]
    },
    {
        id: "chapter10",
        title: "Chapter 10: PGDCA - Advanced Reports",
        topics: [
            {
                heading: "The Day Book",
                text: "The Day Book is a simple list of every single voucher you entered on a specific day. If you made a mistake on a payment, go to Gateway of Tally > Day Book. Click on the entry, fix the number, and press Ctrl+A. To see the whole month, press Alt+F2 and change the dates from 1st to 31st.",
                shortcut: "Gateway of Tally > Day Book (or press K from gateway)",
                imgSrc: "images/tally-22-daybook.jpg"
            },
            {
                heading: "Trial Balance & Ratio Analysis",
                text: "Before checking the Balance Sheet, accountants check the Trial Balance (Alt+G > Trial Balance) to ensure Debit and Credit sides match perfectly. Tally also provides 'Ratio Analysis', a powerful dashboard showing your business's working capital, stock turnover, and quick ratios at a glance.",
                shortcut: "Alt + G > type 'Trial Balance'",
                imgSrc: "images/tally-23-trial-balance.jpg"
            }
        ]
    },
    {
        id: "chapter11",
        title: "Chapter 11: PGDCA - Payroll Management",
        topics: [
            {
                heading: "Creating Pay Heads",
                text: "A Pay Head is a salary component. Go to Create > Pay Head. You must create Earnings (like 'Basic Pay' and 'HRA' set to Earnings for Employees) and Deductions (like 'PF Deduction' set to Employees' Statutory Deduction).",
                shortcut: "Create > Show More > Payroll Masters > Pay Head",
                imgSrc: "images/tally-24-pay-heads.jpg"
            },
            {
                heading: "Attendance & Auto-Salary Generation",
                text: "At the end of the month, press F10 (Other Vouchers) and select 'Attendance'. Mark how many days the staff was Present. Next, open a 'Payroll Voucher' and use the Autofill feature (Ctrl+F). Tally will read the attendance and automatically calculate the exact salary and PF for everyone in 2 seconds!",
                shortcut: "Ctrl + F (Inside a Payroll Voucher to Auto-fill salaries)",
                imgSrc: "images/tally-25-salary.jpg"
            }
        ]
    },
    {
        id: "chapter12",
        title: "Chapter 12: PGDCA - Backup, Restore & Security",
        topics: [
            {
                heading: "Security Control (Admin Passwords)",
                text: "Financial data is highly confidential. Go to Alt+K (Company) > Security. Set 'Control User Access' to Yes. Create an Administrator username and password. Now, no one can open your Tally data without logging in. (Warning: If you forget this password, your data is locked forever!).",
                shortcut: "Alt + K > Security",
                imgSrc: "images/tally-26-security.jpg"
            },
            {
                heading: "Data Backup (Saving your Data)",
                text: "Hard drives can fail. You must copy your Tally data to a USB Pendrive regularly. Go to Alt+Y (Data menu) > Backup. Select your Company, choose the 'Destination Path' (your Pendrive folder like E:/), and click End of List. Tally will create a safe backup file (.tbk).",
                shortcut: "Alt + Y > Backup",
                imgSrc: "images/tally-27-backup.jpg"
            },
            {
                heading: "Data Restore (Recovering Data)",
                text: "If your computer crashes, install Tally Prime on a new PC. Go to Alt+Y > Restore. Select the Destination (where you want to save it), and select the Source (your Pendrive where the backup file is). Tally will perfectly rebuild your entire business file in seconds!",
                shortcut: "Alt + Y > Restore",
                imgSrc: "images/tally-28-restore.jpg"
            }
        ]
    }
];
