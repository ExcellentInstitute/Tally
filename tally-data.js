// tally-data.js
// Excellent Institute - Tally Prime 7.0 with GST Masterclass

const tallyBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: Introduction to Tally Prime 7.0",
        topics: [
            {
                heading: "What is Tally Prime?",
                text: "Tally Prime is a smart digital accountant. In the old days, shopkeepers used big red notebooks (Khatas) to write down who bought what and who paid how much. Tally replaces those notebooks. It automatically calculates your profits, tracks your stock, and generates GST bills instantly without you doing any math!",
                shortcut: "Tally is 90% keyboard-based. The mouse is rarely needed!",
                imgSrc: "images/tally-01-intro.jpg"
            },
            {
                heading: "The Tally Prime 7.0 Interface",
                text: "When you open Tally Prime, you see the 'Gateway of Tally' in the center—this is the main steering wheel. At the very top, there is a new Top Menu Bar (Company, Data, Exchange, Print) which you access using the 'Alt' key. For example, press Alt+K to open the Company menu.",
                shortcut: "Alt + K (Opens the top Company Menu)",
                imgSrc: "images/tally-02-interface.jpg"
            },
            {
                heading: "Educational Mode & Version Check",
                text: "Since we are learning, we click 'Continue in Educational Mode'. It works exactly like the paid software, but it only lets you save data on the 1st, 2nd, and 31st of the month. To check your version, click 'F1: Help' at the top right and click 'About'. You will see 'TallyPrime Release 7.0' written there.",
                shortcut: "F1 > About (To check software version and PC details)",
                imgSrc: "images/tally-03-about.jpg"
            },
            {
                heading: "The Magic 'Go To' Button",
                text: "Tally Prime 7.0 has a magical search bar in the top middle called 'Go To'. If you are doing data entry and suddenly your boss asks to see the Balance Sheet, you don't need to close your work! Just press Alt+G, type 'Balance Sheet', view it, and then close it to return right back to where you were typing.",
                shortcut: "Alt + G (The universal search button in Tally Prime)",
                imgSrc: "images/tally-04-goto.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Company Setup",
        topics: [
            {
                heading: "Creating a New Company",
                text: "Before doing anything, you must create a digital file for your business. Go to Gateway of Tally > Create Company (or press Alt+K > Create). Type your Institute's name, address, and select the State (Odisha). Selecting the correct State is extremely important, otherwise, Tally cannot calculate the correct GST!",
                shortcut: "Financial Year always begins on 1st April.",
                imgSrc: "images/tally-05-create-company.jpg"
            },
            {
                heading: "F11: Company Features",
                text: "The moment you save your new company, Tally shows the 'F11 Features' screen. This is where you turn on the superpower switches for your company. You must set 'Maintain Accounts' to Yes, 'Maintain Inventory' to Yes, and 'Enable GST' to Yes. Press Ctrl+A to save the screen quickly.",
                shortcut: "Ctrl + A (Instantly saves and accepts any screen in Tally)",
                imgSrc: "images/tally-06-f11-features.jpg"
            },
            {
                heading: "Select, Alter, or Shut Company",
                text: "If you spelled the company name wrong, press Alt+K and click 'Alter' to fix it. If you want to close the current business file and open a different one, press Alt+K and click 'Shut'. (Shutting does not delete the company, it just closes the folder).",
                shortcut: "Ctrl + F3 (To quickly Shut the current company)",
                imgSrc: "images/tally-07-alter-shut.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Ledger Creation (Masters)",
        topics: [
            {
                heading: "What is a Ledger?",
                text: "A Ledger is an individual diary for one specific person or thing. If Rahul buys goods from you, you need a 'Rahul Ledger'. If you deposit money in SBI, you need an 'SBI Bank Ledger'. Tally provides two ledgers for free automatically: 'Cash' and 'Profit & Loss A/c'.",
                shortcut: "Gateway of Tally > Create > Ledger",
                imgSrc: "images/tally-08-ledgers.jpg"
            },
            {
                heading: "Understanding Groups",
                text: "When you create a Ledger, Tally asks 'Under which Group?'. A Group tells Tally how to treat the diary. \n- SBI goes under 'Bank Accounts'.\n- A customer you sell to goes under 'Sundry Debtors'.\n- A supplier you buy from goes under 'Sundry Creditors'.\n- Computer/Furniture goes under 'Fixed Assets'.",
                shortcut: "Choosing the wrong Group will ruin your Balance Sheet!",
                imgSrc: "images/tally-09-groups.jpg"
            },
            {
                heading: "Creating Basic Ledgers",
                text: "Go to Create > Ledger. Create a 'Sales A/c' under Sales Accounts. Create a 'Purchase A/c' under Purchase Accounts. Create a capital ledger 'Owner Capital' under Capital Account. Press Ctrl+A to save each one.",
                shortcut: "Gateway of Tally > Alter > Ledger (To fix spelling mistakes)",
                imgSrc: "images/tally-10-basic-ledgers.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Inventory & Stock Management",
        topics: [
            {
                heading: "Units of Measure (UQC)",
                text: "Tally needs to know how you count your items. Do you sell in Liters, Kilograms, or Pieces? Go to Create > Unit. Type the symbol 'NOS' and formal name 'Numbers'. For GST, select the UQC (Unique Quantity Code) as 'NOS-NUMBERS'.",
                shortcut: "Gateway of Tally > Create > Unit",
                imgSrc: "images/tally-11-units.jpg"
            },
            {
                heading: "Stock Groups & Items",
                text: "A Stock Group is a category (like 'Electronics'). A Stock Item is the actual product (like 'Dell Mouse'). Go to Create > Stock Item. Name it 'Dell Mouse', put it under 'Electronics', choose 'NOS' as the unit, and press Ctrl+A to save. Now Tally can track how many mice you have in your shop!",
                shortcut: "Gateway of Tally > Create > Stock Item",
                imgSrc: "images/tally-12-stock.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Voucher Entries (Money Movement)",
        topics: [
            {
                heading: "What is a Voucher?",
                text: "A Voucher is a digital receipt page where you record the movement of money or goods. In Tally Prime, go to Gateway of Tally and click 'Vouchers' (or press V). You use the function keys (F4, F5, F6) to change the type of voucher paper you are writing on.",
                shortcut: "Press V from the Gateway of Tally to open Vouchers",
                imgSrc: "images/tally-13-vouchers.jpg"
            },
            {
                heading: "Receipt (F6) & Payment (F5)",
                text: "Press F6 for a Receipt Voucher. Use this ONLY when money is coming INTO your business (like a student paying fees or capital investment). Press F5 for a Payment Voucher. Use this ONLY when money is going OUT of your business (like paying rent, electricity bill, or buying tea).",
                shortcut: "F5 = Money Out | F6 = Money In",
                imgSrc: "images/tally-14-receipt-payment.jpg"
            },
            {
                heading: "Contra Voucher (F4)",
                text: "Press F4 for Contra. This is a special voucher. It is used ONLY for moving your own money from your left pocket to your right pocket! Examples: Depositing cash into your SBI Bank, withdrawing cash from the ATM for office use, or transferring money from SBI to HDFC Bank.",
                shortcut: "F4 = Cash to Bank OR Bank to Cash ONLY",
                imgSrc: "images/tally-15-contra.jpg"
            },
            {
                heading: "Journal Voucher (F7)",
                text: "Press F7 for Journal. This is an adjustment voucher where NO cash or bank money moves. We use it for credit transactions (like buying a Computer on loan) or calculating depreciation (loss of value) on old furniture.",
                shortcut: "F7 = Non-Cash Adjustments",
                imgSrc: "images/tally-16-journal.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: GST Configuration & Returns",
        topics: [
            {
                heading: "Enabling GST Details",
                text: "Press F11, go to 'Enable GST' and type 'Yes'. A screen will open. Select your state (Odisha), Registration Type (Regular), and type your 15-digit GSTIN number. Set 'e-Way Bill' to No for now. Save the screen. Tally is now ready to calculate taxes automatically!",
                shortcut: "F11 > Enable Goods and Services Tax (GST) > Yes",
                imgSrc: "images/tally-17-enable-gst.jpg"
            },
            {
                heading: "Creating Tax Ledgers (CGST, SGST, IGST)",
                text: "You must create three special ledgers under the group 'Duties & Taxes'. \n- CGST (Central Tax) and SGST (State Tax) are used when selling inside Odisha.\n- IGST (Integrated Tax) is used when selling to another state (like Bengal or Delhi). Choose the Type of Duty as 'GST'.",
                shortcut: "Create > Ledger > Group: Duties & Taxes",
                imgSrc: "images/tally-18-tax-ledgers.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: GST Invoicing & Printing",
        topics: [
            {
                heading: "Purchase Voucher (F9)",
                text: "When you buy goods from a supplier to sell in your shop, press F9. Type the Supplier's Invoice Number. Select the Party (Supplier Ledger), select Purchase A/c, choose the Items (Dell Mouse), type the quantity and rate, and at the bottom, select CGST and SGST. Tally will automatically calculate the tax money!",
                shortcut: "F9 = Recording incoming goods from suppliers",
                imgSrc: "images/tally-19-purchase.jpg"
            },
            {
                heading: "Sales Voucher (F8) with GST",
                text: "When you sell items to a customer, press F8. Select the Party (Customer Ledger), select Sales A/c, pick the items, and add the CGST and SGST ledgers at the bottom. Tally calculates the final bill. Press Ctrl+A to save the sale.",
                shortcut: "F8 = Generating a bill for your customer",
                imgSrc: "images/tally-20-sales.jpg"
            },
            {
                heading: "Printing the Invoice",
                text: "Immediately after saving a Sales Voucher, press 'Page Up' on your keyboard to look at it again. Press Ctrl+P (Print Current). Click 'Preview' (or press I). You will see a beautiful, professional Tax Invoice with your company name, GST numbers, and total amount, ready to be printed!",
                shortcut: "Ctrl + P > I (To preview the printable bill)",
                imgSrc: "images/tally-21-print-invoice.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Viewing Reports",
        topics: [
            {
                heading: "The Day Book",
                text: "The Day Book is a simple list of every single voucher you entered on a specific day. If you made a mistake on a payment, go to Gateway of Tally > Day Book. Click on the entry, fix the number, and press Ctrl+A. To see the whole month, press Alt+F2 and change the dates.",
                shortcut: "Gateway of Tally > Day Book (or press K from gateway)",
                imgSrc: "images/tally-22-daybook.jpg"
            },
            {
                heading: "Simple Balance Sheet",
                text: "The Balance Sheet is the health report card of the business. It shows 'Liabilities' (Left side: loans and money you owe) and 'Assets' (Right side: cash, bank balance, computers you own). Both sides must always have the exact same total amount—they must Balance! Press Alt+F5 to see it in detail.",
                shortcut: "Alt + F5 (To expand the report and see detailed folders)",
                imgSrc: "images/tally-23-balance-sheet.jpg"
            },
            {
                heading: "Profit & Loss A/c (P&L)",
                text: "Go to Gateway of Tally > Profit & Loss A/c. The left side shows all your expenses (rent, salary, purchases). The right side shows your income (sales, commission received). At the very bottom, it will clearly show either a 'Net Profit' or a 'Net Loss' for the year.",
                shortcut: "Gateway of Tally > Profit & Loss A/c",
                imgSrc: "images/tally-24-pnl.jpg"
            }
        ]
    },
    {
        id: "chapter9",
        title: "Chapter 9: Payroll Management",
        topics: [
            {
                heading: "What is Payroll?",
                text: "Payroll is the system used by companies to calculate and distribute salary to employees. It tracks attendance, adds bonuses (like Dearness Allowance), and deducts taxes or Provident Fund (PF) automatically before generating the final Pay Slip.",
                shortcut: "F11 > Enable Payroll > Yes",
                imgSrc: "images/tally-25-payroll-intro.jpg"
            },
            {
                heading: "Employee & Pay Heads Setup",
                text: "To run payroll, you must first create 'Employee Groups' (e.g., Teachers, Office Staff). Next, create the 'Employees' with their bank details. Finally, create 'Pay Heads'. A Pay Head is a salary component: 'Basic Pay' is an Earning, while 'PF Deduction' is a Deduction.",
                shortcut: "Create > Show More > Payroll Masters",
                imgSrc: "images/tally-26-pay-heads.jpg"
            },
            {
                heading: "Attendance & Salary Vouchers",
                text: "At the end of the month, go to Vouchers. Press F10 (Other Vouchers) and select 'Attendance'. Mark how many days the employee was Present. Next, open a 'Payroll Voucher' and use the Autofill feature (Ctrl+F). Tally will read the attendance and magically generate the exact salary amount for everyone at once!",
                shortcut: "F10 (Other Vouchers) > Attendance / Payroll",
                imgSrc: "images/tally-27-salary.jpg"
            }
        ]
    },
    {
        id: "chapter10",
        title: "Chapter 10: Security, Backup & Restore",
        topics: [
            {
                heading: "Setting Admin Passwords",
                text: "Financial data is highly confidential. Go to Alt+K (Company) > Security. Set 'Control User Access' to Yes. Create an Administrator username and password. Now, no one can open your Tally data without logging in. (Warning: If you forget this password, Tally Solutions cannot recover your data!).",
                shortcut: "Alt + K > Security",
                imgSrc: "images/tally-28-security.jpg"
            },
            {
                heading: "Backup (Saving your Data)",
                text: "Computers can catch viruses or hard drives can fail. You must copy your Tally data to a USB Pendrive regularly. Go to Alt+Y (Data menu) > Backup. Select your Company, choose the 'Destination Path' (your Pendrive folder like E:/), and click End of List. Tally will create a safe backup file (.tbk).",
                shortcut: "Alt + Y > Backup",
                imgSrc: "images/tally-29-backup.jpg"
            },
            {
                heading: "Restore (Recovering Data)",
                text: "If your computer crashes and you buy a new one, install Tally Prime. Go to Alt+Y > Restore. Select the Destination (where you want to save it on the new PC), and select the Source (your Pendrive where the backup file is). Tally will perfectly rebuild your entire business file in seconds!",
                shortcut: "Alt + Y > Restore",
                imgSrc: "images/tally-30-restore.jpg"
            }
        ]
    }
];
