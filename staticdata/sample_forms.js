[
    {
        "form_id": "1",
        "form_name": "Lender Portal SRF Form",
        "form_fields": [
            {
                "fieldName": "ProjectName",
                "fieldLabel": "Project Type",
                "orderIndex": "1.1.1",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
                
                
            }, 
            {
                "fieldName": "BorrowerName",
                "fieldLabel": "Borrowers Name",
                "orderIndex": "1.1.2",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
                
                
            },
            {
                "fieldName": "loanType",
                "fieldLabel": "Loan Type",
                "orderIndex": "1.1.3",
                "required": 1,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Commercial",
                        "value": "Commercial",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Foreclosure",
                        "value": "Foreclosure",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Environmentally Sensitive Industry",
                        "value": "Environmentally Sensitive Industry",
                        "orderIndex": 3,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
                
                
            },
            {
                "fieldName": "LoanAmount",
                "fieldLabel": "Loan Amount",
                "orderIndex": "1.1.4",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,                
                "fieldType" : "textfield"
                
            },{
                "fieldName": "BorrowerType",
                "fieldLabel": "Borrower Type",
                "orderIndex": "1.1.5",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Individual",
                        "value": "Individual",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Legal Entity",
                        "value": "Legal Entity",
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
            },{
                "fieldName": "LoanNumber",
                "fieldLabel": "Obligation # / Loan Number",
                "orderIndex": "1.1.6",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },{
                "fieldName": "DesiredReviewDate",
                "fieldLabel": "Desired Review Delivery Date",
                "orderIndex": "1.1.7",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "date"
            },
            {
                "fieldName": "ClosingDate",
                "fieldLabel": "Anticipated Closing Date",
                "orderIndex": "1.1.8",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "date"
            }
            ,{
                "fieldName": "Purpose",
                "fieldLabel": "Purpose of the Request",
                "orderIndex": "1.1.9",
                "required": 0,
                "viewStatus": 1,                
                "options": [
                    {
                        "name": "Loan Underwriting",
                        "value": "Loan Underwriting",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Loan Monitoring1",
                        "value": "Loan Monitoring1",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Foreclosure",
                        "value": "Foreclosure",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "OREO",
                        "value": "OREO",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "Other",
                        "value": "Other",
                        "orderIndex": 5,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
            },
            {
                "fieldName": "TransactionType",
                "fieldLabel": "Credit Transaction Type",
                "orderIndex": "1.1.10",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "New Loan to the Bank",
                        "value": "NewLoan",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Renewal/Modification of existing 5/3 loan without new money over existing Loan Balance",
                        "value": "ModificationWithoutNewMoney",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Renewal/Modification of existing 5/3 loan with new money over existing Loan Balance",
                        "value": "ModificationWithNewMoney",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Other",
                        "value": "Other",
                        "orderIndex": 4,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
            },
            {
                "fieldName": "loanPurpose",
                "fieldLabel": "Loan Purpose",
                "orderIndex": "1.1.11",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Business",
                        "value": "Business",
                        "orderIndex": 10,
                        "parent": ""
                    },
                    {
                        "name": "Consumer",
                        "value": "Consumer",
                        "orderIndex": 20,
                        "parent": ""
                    }
                ],
                "tooltip": [
                    {
                        "header": "Business Loan",
                        "body": "Business Loan - A loan made for business purposes whose primary source of repayment is not dependent upon the sale of, or rental income derived from, the real estate taken as collateral or any other real estate (e.g. commercial mortgage, term loan, seasonal line of credit, etc.); a loan or extension of credit to any corporation, general or limited partnership, business trust, joint venture, pool, syndicate, sole proprietorship (including an individual engaging in farming), or other business entity; Loans to individuals or consumer loans do not qualify as business loans."
                    }
                ],
                "fieldType" : "dropdown"
            },
            {
                "fieldName": "IsSbaLoan",
                "fieldLabel": "SBA Involvement?",
                "orderIndex": "1.1.12",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Yes",
                        "value": 1,
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "No",
                        "value": 0,
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "radio"
            },
            {
                "fieldName": "IsParticipationLoan",
                "fieldLabel": "Participation/Syndication/SNC loan?",
                "orderIndex": "1.1.13",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Yes",
                        "value": 1,
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "No",
                        "value": 0,
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "radio"
            },
            {
                "fieldName": "RifNumber",
                "fieldLabel": "RIF # or Prospect",
                "orderIndex": "1.1.14",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "Requester",
                "fieldLabel": "Requester",
                "orderIndex": "1.3.1",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "NotifyEmails",
                "fieldLabel": "Email Address(es)",
                "orderIndex": "1.3.2",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "CostCenterNumber",
                "fieldLabel": "Billing Cost Center #",
                "orderIndex": "1.4.1",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "LedgerNumber",
                "fieldLabel": "General Ledger #",
                "orderIndex": "1.4.2",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldname": "propertySubType",
                "fieldLabel": "",
                "orderIndex": null,
                "viewStatus": null,
                "parentDataField": "propertyType",
                "fieldType" : "dropdown",
                "options": [
                    {
                        "name": "Agribusiness - Dairy, Hog, Poultry, Fish, etc.",
                        "value": "Agribusiness - Dairy, Hog, Poultry, Fish, etc.",
                        "orderIndex": 1,
                        "parent": "Agricultural"
                    },
                    {
                        "name": "Farms/Row Crops/Hobby Farms",
                        "value": "Farms/Row Crops/Hobby Farms",
                        "orderIndex": 2,
                        "parent": "Agricultural"
                    },
                    {
                        "name": "Land - Agricultural Zoned - vacant and not farmed",
                        "value": "Land - Agricultural Zoned - vacant and not farmed",
                        "orderIndex": 3,
                        "parent": "Agricultural"
                    },
                    {
                        "name": "Land - Pasture/Ranch",
                        "value": "Land - Pasture/Ranch",
                        "orderIndex": 4,
                        "parent": "Agricultural"
                    },
                    {
                        "name": "Land - Permanent Crops (Vineyard/Orchard/Grove)",
                        "value": "Land - Permanent Crops (Vineyard/Orchard/Grove)",
                        "orderIndex": 5,
                        "parent": "Agricultural"
                    },
                    {
                        "name": "Land - Timberland",
                        "value": "Land - Timberland",
                        "orderIndex": 6,
                        "parent": "Agricultural"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 7,
                        "parent": "Agricultural"
                    },
                    {
                        "name": "Ambulatory Surgery Center",
                        "value": "Ambulatory Surgery Center",
                        "orderIndex": 1,
                        "parent": "Health Care"
                    },
                    {
                        "name": "Hospital/Medical Center",
                        "value": "Hospital/Medical Center",
                        "orderIndex": 2,
                        "parent": "Health Care"
                    },
                    {
                        "name": "Land - Commercial",
                        "value": "Land - Commercial",
                        "orderIndex": 3,
                        "parent": "Health Care"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 4,
                        "parent": "Health Care"
                    },
                    {
                        "name": "Rehabilitation Center",
                        "value": "Rehabilitation Center",
                        "orderIndex": 5,
                        "parent": "Health Care"
                    },
                    {
                        "name": "Condominium Unit(s)",
                        "value": "Condominium Unit(s)",
                        "orderIndex": 1,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Flex/Tech Building",
                        "value": "Flex/Tech Building",
                        "orderIndex": 2,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Food Processing/Production",
                        "value": "Food Processing/Production",
                        "orderIndex": 3,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Industrial- Business Park Subdivision",
                        "value": "Industrial- Business Park Subdivision",
                        "orderIndex": 5,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Industrial - Office/Retail Showroom",
                        "value": "Industrial - Office/Retail Showroom",
                        "orderIndex": 6,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Land - Industrial",
                        "value": "Land - Industrial",
                        "orderIndex": 7,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Manufacturing",
                        "value": "Manufacturing",
                        "orderIndex": 8,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 9,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Research and Development",
                        "value": "Research and Development",
                        "orderIndex": 10,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Salvage yard",
                        "value": "Salvage yard",
                        "orderIndex": 11,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Saw Mill",
                        "value": "Saw Mill",
                        "orderIndex": 12,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Self/Public/Mini-Storage",
                        "value": "Self/Public/Mini-Storage",
                        "orderIndex": 13,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Storage Yard",
                        "value": "Storage Yard",
                        "orderIndex": 14,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Tank Farm/Petroleum Storage/Refinery",
                        "value": "Tank Farm/Petroleum Storage/Refinery",
                        "orderIndex": 15,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Truck Terminal/Hub/Transit Facility",
                        "value": "Truck Terminal/Hub/Transit Facility",
                        "orderIndex": 16,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Underground/Cave Storage",
                        "value": "Underground/Cave Storage",
                        "orderIndex": 17,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Warehouse-Distribution Warehouse",
                        "value": "Warehouse-Distribution Warehouse",
                        "orderIndex": 18,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Warehouse-Refrigerated/Cold Storage",
                        "value": "Warehouse-Refrigerated/Cold Storage",
                        "orderIndex": 19,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Warehouse-Storage Warehouse",
                        "value": "Warehouse-Storage Warehouse",
                        "orderIndex": 20,
                        "parent": "Industrial"
                    },
                    {
                        "name": "Land - Agricultural Zoned - vacant and not farmed",
                        "value": "Land - Agricultural Zoned - vacant and not farmed",
                        "orderIndex": 1,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Commercial",
                        "value": "Land - Commercial",
                        "orderIndex": 2,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Industrial",
                        "value": "Land - Industrial",
                        "orderIndex": 3,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Office",
                        "value": "Land - Office",
                        "orderIndex": 4,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Other - Provide details in property description",
                        "value": "Land - Other - Provide details in property description",
                        "orderIndex": 5,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Pasture/Ranch",
                        "value": "Land - Pasture/Ranch",
                        "orderIndex": 6,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Permanent Crops (Vineyard/Orchard/Grove)",
                        "value": "Land - Permanent Crops (Vineyard/Orchard/Grove)",
                        "orderIndex": 7,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Residential Subdivision (5 or more lots)",
                        "value": "Land - Residential Subdivision (5 or more lots)",
                        "orderIndex": 8,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Retail",
                        "value": "Land - Retail",
                        "orderIndex": 9,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Timberland",
                        "value": "Land - Timberland",
                        "orderIndex": 10,
                        "parent": "Land "
                    },
                    {
                        "name": "Land - Wilderness/Recreational",
                        "value": "Land - Wilderness/Recreational",
                        "orderIndex": 11,
                        "parent": "Land "
                    },
                    {
                        "name": "Bed & Breakfast ",
                        "value": "Bed & Breakfast ",
                        "orderIndex": 1,
                        "parent": "Lodging/Hospitality"
                    },
                    {
                        "name": "Campground/RV-Trailer Camp",
                        "value": "Campground/RV-Trailer Camp",
                        "orderIndex": 2,
                        "parent": "Lodging/Hospitality"
                    },
                    {
                        "name": "Economy/Limited Service",
                        "value": "Economy/Limited Service",
                        "orderIndex": 3,
                        "parent": "Lodging/Hospitality"
                    },
                    {
                        "name": "Full Service",
                        "value": "Full Service",
                        "orderIndex": 4,
                        "parent": "Lodging/Hospitality"
                    },
                    {
                        "name": "Land - Commercial",
                        "value": "Land - Commercial",
                        "orderIndex": 5,
                        "parent": "Lodging/Hospitality"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 6,
                        "parent": "Lodging/Hospitality"
                    },
                    {
                        "name": "Apartments -Market Rent",
                        "value": "Apartments -Market Rent",
                        "orderIndex": 1,
                        "parent": "Multi-family"
                    },
                    {
                        "name": "Apartments - Government Subsidized",
                        "value": "Apartments - Government Subsidized",
                        "orderIndex": 2,
                        "parent": "Multi-family"
                    },
                    {
                        "name": "Apartments - LIHTC Tax Credits",
                        "value": "Apartments - LIHTC Tax Credits",
                        "orderIndex": 3,
                        "parent": "Multi-family"
                    },
                    {
                        "name": "Manufactured Home Park",
                        "value": "Manufactured Home Park",
                        "orderIndex": 4,
                        "parent": "Multi-family"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 5,
                        "parent": "Multi-family"
                    },
                    {
                        "name": "Land - Residential Subdivision (5 or more lots)",
                        "value": "Land - Residential Subdivision (5 or more lots)",
                        "orderIndex": 6,
                        "parent": "Multi-family"
                    },
                    {
                        "name": "Student Housing",
                        "value": "Student Housing",
                        "orderIndex": 7,
                        "parent": "Multi-family"
                    },
                    {
                        "name": "Condominium Unit",
                        "value": "Condominium Unit",
                        "orderIndex": 1,
                        "parent": "Office"
                    },
                    {
                        "name": "Institutional/Governmental",
                        "value": "Institutional/Governmental",
                        "orderIndex": 2,
                        "parent": "Office"
                    },
                    {
                        "name": "Land - Office",
                        "value": "Land - Office",
                        "orderIndex": 3,
                        "parent": "Office"
                    },
                    {
                        "name": "Medical Office",
                        "value": "Medical Office",
                        "orderIndex": 4,
                        "parent": "Office"
                    },
                    {
                        "name": "Office Building",
                        "value": "Office Building",
                        "orderIndex": 5,
                        "parent": "Office"
                    },
                    {
                        "name": "Office - R&D/Laboratoy",
                        "value": "Office - R&D/Laboratoy",
                        "orderIndex": 6,
                        "parent": "Office"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 7,
                        "parent": "Office"
                    },
                    {
                        "name": "Single Family Home",
                        "value": "Single Family Home",
                        "orderIndex": 10,
                        "parent": "Residential "
                    },
                    {
                        "name": "2-4 Family Home",
                        "value": "2-4 Family Home",
                        "orderIndex": 20,
                        "parent": "Residential "
                    },
                    {
                        "name": "Individual Condominium Unit",
                        "value": "Individual Condominium Unit",
                        "orderIndex": 30,
                        "parent": "Residential "
                    },
                    {
                        "name": "Individual Cooperative Apartment",
                        "value": "Individual Cooperative Apartment",
                        "orderIndex": 40,
                        "parent": "Residential "
                    },
                    {
                        "name": "Manufactured Home",
                        "value": "Manufactured Home",
                        "orderIndex": 50,
                        "parent": "Residential "
                    },
                    {
                        "name": "Vacant Land",
                        "value": "Vacant Land",
                        "orderIndex": 60,
                        "parent": "Residential "
                    },
                    {
                        "name": "Residential Subdivision",
                        "value": "Residential Subdivision",
                        "orderIndex": 70,
                        "parent": "Residential "
                    },
                    {
                        "name": "Other",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 80,
                        "parent": "Residential "
                    },
                    {
                        "name": "Car Wash",
                        "value": "Car Wash",
                        "orderIndex": 1,
                        "parent": "Retail"
                    },
                    {
                        "name": "Condominium Unit(s)",
                        "value": "Condominium Unit(s)",
                        "orderIndex": 2,
                        "parent": "Retail"
                    },
                    {
                        "name": "Convenience Store - no gasoline",
                        "value": "Convenience Store - no gasoline",
                        "orderIndex": 3,
                        "parent": "Retail"
                    },
                    {
                        "name": "Day Care Facility/Nursery",
                        "value": "Day Care Facility/Nursery",
                        "orderIndex": 4,
                        "parent": "Retail"
                    },
                    {
                        "name": "Free Standing Building-Bank Branch",
                        "value": "Free Standing Building-Bank Branch",
                        "orderIndex": 5,
                        "parent": "Retail"
                    },
                    {
                        "name": "Free Standing Building-Big Box",
                        "value": "Free Standing Building-Big Box",
                        "orderIndex": 6,
                        "parent": "Retail"
                    },
                    {
                        "name": "Free Standing Building-Dept Store",
                        "value": "Free Standing Building-Dept Store",
                        "orderIndex": 7,
                        "parent": "Retail"
                    },
                    {
                        "name": "Free Standing Building-Free Standing",
                        "value": "Free Standing Building-Free Standing",
                        "orderIndex": 8,
                        "parent": "Retail"
                    },
                    {
                        "name": "Free Standing Building",
                        "value": "Free Standing Building",
                        "orderIndex": 9,
                        "parent": "Retail"
                    },
                    {
                        "name": "Garden Center",
                        "value": "Garden Center",
                        "orderIndex": 10,
                        "parent": "Retail"
                    },
                    {
                        "name": "Land - Retail",
                        "value": "Land - Retail",
                        "orderIndex": 11,
                        "parent": "Retail"
                    },
                    {
                        "name": "Laundromat-Self Serve ",
                        "value": "Laundromat-Self Serve ",
                        "orderIndex": 12,
                        "parent": "Retail"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 13,
                        "parent": "Retail"
                    },
                    {
                        "name": "Parking Garage",
                        "value": "Parking Garage",
                        "orderIndex": 14,
                        "parent": "Retail"
                    },
                    {
                        "name": "Parking Lot",
                        "value": "Parking Lot",
                        "orderIndex": 15,
                        "parent": "Retail"
                    },
                    {
                        "name": "Restaurant-Fast Food",
                        "value": "Restaurant-Fast Food",
                        "orderIndex": 16,
                        "parent": "Retail"
                    },
                    {
                        "name": "Restaurant-Sit Down",
                        "value": "Restaurant-Sit Down",
                        "orderIndex": 17,
                        "parent": "Retail"
                    },
                    {
                        "name": "Lumberyard",
                        "value": "Lumberyard",
                        "orderIndex": 18,
                        "parent": "Retail"
                    },
                    {
                        "name": "Service Station/Gas Station",
                        "value": "Service Station/Gas Station",
                        "orderIndex": 19,
                        "parent": "Retail"
                    },
                    {
                        "name": "Shopping Center: Community Center",
                        "value": "Shopping Center: Community Center",
                        "orderIndex": 20,
                        "parent": "Retail"
                    },
                    {
                        "name": "Shopping Center: Convenience/Strip Center",
                        "value": "Shopping Center: Convenience/Strip Center",
                        "orderIndex": 21,
                        "parent": "Retail"
                    },
                    {
                        "name": "Shopping Center: Neighborhood Center",
                        "value": "Shopping Center: Neighborhood Center",
                        "orderIndex": 22,
                        "parent": "Retail"
                    },
                    {
                        "name": "Shopping Center:  Other",
                        "value": "Shopping Center:  Other",
                        "orderIndex": 23,
                        "parent": "Retail"
                    },
                    {
                        "name": "Shopping Center: Outlet/Power/Lifestyle Center",
                        "value": "Shopping Center: Outlet/Power/Lifestyle Center",
                        "orderIndex": 24,
                        "parent": "Retail"
                    },
                    {
                        "name": "Shopping Center: Regional/Super Regional Center",
                        "value": "Shopping Center: Regional/Super Regional Center",
                        "orderIndex": 25,
                        "parent": "Retail"
                    },
                    {
                        "name": "Street Retail/Storefront",
                        "value": "Street Retail/Storefront",
                        "orderIndex": 26,
                        "parent": "Retail"
                    },
                    {
                        "name": "Tavern, Bar, Nightclub, Micro-Brewery",
                        "value": "Tavern, Bar, Nightclub, Micro-Brewery",
                        "orderIndex": 27,
                        "parent": "Retail"
                    },
                    {
                        "name": "Vehicle Related-Dealership",
                        "value": "Vehicle Related-Dealership",
                        "orderIndex": 28,
                        "parent": "Retail"
                    },
                    {
                        "name": "Vehicle Related-Lube Shop",
                        "value": "Vehicle Related-Lube Shop",
                        "orderIndex": 29,
                        "parent": "Retail"
                    },
                    {
                        "name": "Vehicle Related-Service & Repair",
                        "value": "Vehicle Related-Service & Repair",
                        "orderIndex": 30,
                        "parent": "Retail"
                    },
                    {
                        "name": "Vehicle Related-Truck Stop",
                        "value": "Vehicle Related-Truck Stop",
                        "orderIndex": 31,
                        "parent": "Retail"
                    },
                    {
                        "name": "Assisted Living Residences",
                        "value": "Assisted Living Residences",
                        "orderIndex": 1,
                        "parent": "Senior Housing"
                    },
                    {
                        "name": "Congregate Seniors Housing",
                        "value": "Congregate Seniors Housing",
                        "orderIndex": 2,
                        "parent": "Senior Housing"
                    },
                    {
                        "name": "Continuing Care Retirement Communities",
                        "value": "Continuing Care Retirement Communities",
                        "orderIndex": 3,
                        "parent": "Senior Housing"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 4,
                        "parent": "Senior Housing"
                    },
                    {
                        "name": "Land - Commercial",
                        "value": "Land - Commercial",
                        "orderIndex": 5,
                        "parent": "Senior Housing"
                    },
                    {
                        "name": "Skilled Nursing Facility",
                        "value": "Skilled Nursing Facility",
                        "orderIndex": 6,
                        "parent": "Senior Housing"
                    },
                    {
                        "name": "Airplane Hanger",
                        "value": "Airplane Hanger",
                        "orderIndex": 1,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Armory/Club/Lodge Facility",
                        "value": "Armory/Club/Lodge Facility",
                        "orderIndex": 2,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Cement/Rock/Gravel Plant",
                        "value": "Cement/Rock/Gravel Plant",
                        "orderIndex": 3,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Funeral Home/Mortuary",
                        "value": "Funeral Home/Mortuary",
                        "orderIndex": 4,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Land - Commercial",
                        "value": "Land - Commercial",
                        "orderIndex": 5,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Marina/Marine-Repair/Service",
                        "value": "Marina/Marine-Repair/Service",
                        "orderIndex": 6,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Meeting/Banquet Facility",
                        "value": "Meeting/Banquet Facility",
                        "orderIndex": 7,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Mine/Quarry",
                        "value": "Mine/Quarry",
                        "orderIndex": 8,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 9,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Religious Facility",
                        "value": "Religious Facility",
                        "orderIndex": 10,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "School/University",
                        "value": "School/University",
                        "orderIndex": 11,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Veterinarian Facility/Kennel",
                        "value": "Veterinarian Facility/Kennel",
                        "orderIndex": 12,
                        "parent": "Special Purpose"
                    },
                    {
                        "name": "Amusement Park",
                        "value": "Amusement Park",
                        "orderIndex": 1,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Aquatic Facility/Swimming Pool",
                        "value": "Aquatic Facility/Swimming Pool",
                        "orderIndex": 2,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Bowling Alley",
                        "value": "Bowling Alley",
                        "orderIndex": 3,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Golf Course/Driving Range",
                        "value": "Golf Course/Driving Range",
                        "orderIndex": 4,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Health & Fitness Center/Sports Club/Gym",
                        "value": "Health & Fitness Center/Sports Club/Gym",
                        "orderIndex": 5,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Horse Farms/Stables/Equestrian Center",
                        "value": "Horse Farms/Stables/Equestrian Center",
                        "orderIndex": 6,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Land - Commercial",
                        "value": "Land - Commercial",
                        "orderIndex": 7,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Other - Provide details in property description",
                        "value": "Other - Provide details in property description",
                        "orderIndex": 8,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Skating Rink",
                        "value": "Skating Rink",
                        "orderIndex": 9,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Ski Resort",
                        "value": "Ski Resort",
                        "orderIndex": 10,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Sports Arena/Stadiums",
                        "value": "Sports Arena/Stadiums",
                        "orderIndex": 11,
                        "parent": "Sport/Entertainment"
                    },
                    {
                        "name": "Theatre/Concert Hall",
                        "value": "Theatre/Concert Hall",
                        "orderIndex": 12,
                        "parent": "Sport/Entertainment"
                    }
                ]
            },
            
            
            
            {
                "fieldName": "CommercialResidential",
                "fieldLabel": "Property Category",
                "orderIndex": "2.1.1",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Residential",
                        "value": "Residential",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Commercial",
                        "value": "Commercial",
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "textfield"
                
            },
            {
                "fieldName": "PropertyType",
                "fieldLabel": "Property Type",
                "orderIndex": "2.1.2",
                "required": 1,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Agricultural",
                        "value": "Agricultural",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Health Care",
                        "value": "Health Care",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Industrial",
                        "value": "Industrial",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Land",
                        "value": "Land",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "Lodging/Hospitality",
                        "value": "Lodging/Hospitality",
                        "orderIndex": 5,
                        "parent": ""
                    },
                    {
                        "name": "Multi-family",
                        "value": "Multi-family",
                        "orderIndex": 6,
                        "parent": ""
                    },
                    {
                        "name": "Office",
                        "value": "Office",
                        "orderIndex": 7,
                        "parent": ""
                    },
                    {
                        "name": "Residential",
                        "value": "Residential",
                        "orderIndex": 8,
                        "parent": ""
                    },
                    {
                        "name": "Retail",
                        "value": "Retail",
                        "orderIndex": 9,
                        "parent": ""
                    },
                    {
                        "name": "Senior Housing",
                        "value": "Senior Housing",
                        "orderIndex": 10,
                        "parent": ""
                    },
                    {
                        "name": "Special Purpose",
                        "value": "Special Purpose",
                        "orderIndex": 11,
                        "parent": ""
                    },
                    {
                        "name": "Sport/Entertainment",
                        "value": "Sport/Entertainment",
                        "orderIndex": 12,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
                
                
            },
            {
                "fieldName": "riskLevel",
                "fieldLabel": "Business Operations Risk Level",
                "orderIndex": "2.1.3",
                "required": 1,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Low Risk",
                        "value": "Low Risk",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Elevated Risk",
                        "value": "Elevated Risk",
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
            },
            {
                "fieldName": "PropAddress",
                "fieldLabel": "Property Address",
                "orderIndex": "2.1.4",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropUnit",
                "fieldLabel": "Suite / Floor / Unit",
                "orderIndex": "2.1.5",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropCity",
                "fieldLabel": "City",
                "orderIndex": "2.1.6",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropState",
                "fieldLabel": "State/Province",
                "orderIndex": "2.1.7",
                "required": 1,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Alabama",
                        "value": "AL",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Alaska",
                        "value": "AK",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Arizona",
                        "value": "AZ",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Arkansas",
                        "value": "AR",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "California",
                        "value": "CA",
                        "orderIndex": 5,
                        "parent": ""
                    },
                    {
                        "name": "Colorado",
                        "value": "CO",
                        "orderIndex": 6,
                        "parent": ""
                    },
                    {
                        "name": "Connecticut",
                        "value": "CT",
                        "orderIndex": 7,
                        "parent": ""
                    },
                    {
                        "name": "Delaware",
                        "value": "DE",
                        "orderIndex": 8,
                        "parent": ""
                    },
                    {
                        "name": "District of Columbia",
                        "value": "DC",
                        "orderIndex": 9,
                        "parent": ""
                    },
                    {
                        "name": "Florida",
                        "value": "FL",
                        "orderIndex": 10,
                        "parent": ""
                    },
                    {
                        "name": "Georgia",
                        "value": "GA",
                        "orderIndex": 11,
                        "parent": ""
                    },
                    {
                        "name": "Hawaii",
                        "value": "HI",
                        "orderIndex": 12,
                        "parent": ""
                    },
                    {
                        "name": "Idaho",
                        "value": "ID",
                        "orderIndex": 13,
                        "parent": ""
                    },
                    {
                        "name": "Illinois",
                        "value": "IL",
                        "orderIndex": 14,
                        "parent": ""
                    },
                    {
                        "name": "Indiana",
                        "value": "IN",
                        "orderIndex": 15,
                        "parent": ""
                    },
                    {
                        "name": "Iowa",
                        "value": "IA",
                        "orderIndex": 16,
                        "parent": ""
                    },
                    {
                        "name": "Kansas",
                        "value": "KS",
                        "orderIndex": 17,
                        "parent": ""
                    },
                    {
                        "name": "Kentucky",
                        "value": "KY",
                        "orderIndex": 18,
                        "parent": ""
                    },
                    {
                        "name": "Louisiana",
                        "value": "LA",
                        "orderIndex": 19,
                        "parent": ""
                    },
                    {
                        "name": "Maine",
                        "value": "ME",
                        "orderIndex": 20,
                        "parent": ""
                    },
                    {
                        "name": "Maryland",
                        "value": "MD",
                        "orderIndex": 21,
                        "parent": ""
                    },
                    {
                        "name": "Massachusetts",
                        "value": "MA",
                        "orderIndex": 22,
                        "parent": ""
                    },
                    {
                        "name": "Michigan",
                        "value": "MI",
                        "orderIndex": 23,
                        "parent": ""
                    },
                    {
                        "name": "Minnesota",
                        "value": "MN",
                        "orderIndex": 24,
                        "parent": ""
                    },
                    {
                        "name": "Mississippi",
                        "value": "MS",
                        "orderIndex": 25,
                        "parent": ""
                    },
                    {
                        "name": "Missouri",
                        "value": "MO",
                        "orderIndex": 26,
                        "parent": ""
                    },
                    {
                        "name": "Montana",
                        "value": "MT",
                        "orderIndex": 27,
                        "parent": ""
                    },
                    {
                        "name": "Nebraska",
                        "value": "NE",
                        "orderIndex": 28,
                        "parent": ""
                    },
                    {
                        "name": "Nevada",
                        "value": "NV",
                        "orderIndex": 29,
                        "parent": ""
                    },
                    {
                        "name": "New Hampshire",
                        "value": "NH",
                        "orderIndex": 30,
                        "parent": ""
                    },
                    {
                        "name": "New Jersey",
                        "value": "NJ",
                        "orderIndex": 31,
                        "parent": ""
                    },
                    {
                        "name": "New Mexico",
                        "value": "NM",
                        "orderIndex": 32,
                        "parent": ""
                    },
                    {
                        "name": "New York",
                        "value": "NY",
                        "orderIndex": 33,
                        "parent": ""
                    },
                    {
                        "name": "North Carolina",
                        "value": "NC",
                        "orderIndex": 34,
                        "parent": ""
                    },
                    {
                        "name": "North Dakota",
                        "value": "ND",
                        "orderIndex": 35,
                        "parent": ""
                    },
                    {
                        "name": "Ohio",
                        "value": "OH",
                        "orderIndex": 36,
                        "parent": ""
                    },
                    {
                        "name": "Oklahoma",
                        "value": "OK",
                        "orderIndex": 37,
                        "parent": ""
                    },
                    {
                        "name": "Oregon",
                        "value": "OR",
                        "orderIndex": 38,
                        "parent": ""
                    },
                    {
                        "name": "Pennsylvania",
                        "value": "PA",
                        "orderIndex": 39,
                        "parent": ""
                    },
                    {
                        "name": "Puerto Rico",
                        "value": "PR",
                        "orderIndex": 40,
                        "parent": ""
                    },
                    {
                        "name": "Rhode Island",
                        "value": "RI",
                        "orderIndex": 41,
                        "parent": ""
                    },
                    {
                        "name": "South Carolina",
                        "value": "SC",
                        "orderIndex": 42,
                        "parent": ""
                    },
                    {
                        "name": "South Dakota",
                        "value": "SD",
                        "orderIndex": 43,
                        "parent": ""
                    },
                    {
                        "name": "Tennessee",
                        "value": "TN",
                        "orderIndex": 44,
                        "parent": ""
                    },
                    {
                        "name": "Texas",
                        "value": "TX",
                        "orderIndex": 45,
                        "parent": ""
                    },
                    {
                        "name": "Utah",
                        "value": "UT",
                        "orderIndex": 46,
                        "parent": ""
                    },
                    {
                        "name": "Vermont",
                        "value": "VT",
                        "orderIndex": 47,
                        "parent": ""
                    },
                    {
                        "name": "Virginia",
                        "value": "VA",
                        "orderIndex": 48,
                        "parent": ""
                    },
                    {
                        "name": "Washington",
                        "value": "WA",
                        "orderIndex": 49,
                        "parent": ""
                    },
                    {
                        "name": "West Virginia",
                        "value": "WV",
                        "orderIndex": 50,
                        "parent": ""
                    },
                    {
                        "name": "Wisconsin",
                        "value": "WI",
                        "orderIndex": 51,
                        "parent": ""
                    },
                    {
                        "name": "Wyoming",
                        "value": "WY",
                        "orderIndex": 52,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
            },
            {
                "fieldName": "PropZip",
                "fieldLabel": "Zip/Postal Code",
                "orderIndex": "2.1.8",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
                
            },
            {
                "fieldName": "PropCountry",
                "fieldLabel": "Country",
                "orderIndex": "2.1.9",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropCounty",
                "fieldLabel": "County",
                "orderIndex": "2.1.10",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropLatitude",
                "fieldLabel": "Latitude",
                "orderIndex": "2.1.11",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropLongitude",
                "fieldLabel": "Longitude",
                "orderIndex": "2.1.12",
                "required": 1,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "CollateralID",
                "fieldLabel": "Collateral ID",
                "orderIndex": "2.1.13",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropertyNumbers",
                "fieldLabel": "APN / Property Numbers",
                "orderIndex": "2.1.14",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "ContactType",
                "fieldLabel": "Property Contact",
                "orderIndex": "2.2.2",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Owner",
                        "value": "Owner",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Property Manager",
                        "value": "Property Manager",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Tenant",
                        "value": "Tenant",
                        "orderIndex": 3,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
            },
            {
                "fieldName": "ContactName",
                "fieldLabel": "Name",
                "orderIndex": "2.2.3",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "ContactPhone",
                "fieldLabel": "Phone",
                "orderIndex": "2.2.4",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "ContactEmail",
                "fieldLabel": "Email",
                "orderIndex": "2.2.5",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "ContactAltPhone",
                "fieldLabel": "AltPhone",
                "orderIndex": "2.2.6",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "ContactFax",
                "fieldLabel": "Fax",
                "orderIndex": "2.2.7",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropNaics",
                "fieldLabel": "NAICS #",
                "orderIndex": "2.2.8",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropInterest",
                "fieldLabel": "Property Interest Appraised (check all that apply)",
                "orderIndex": "2.2.9",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Fee Simple",
                        "value": "FeeSimple",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Leased Fee",
                        "value": "LeasedFee",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Leasehold",
                        "value": "Leasehold",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Not Sure",
                        "value": "NotSure",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "Other",
                        "value": "Other",
                        "orderIndex": 5,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "checkbox"
            },
            {
                "fieldName": "ValuationPremise",
                "fieldLabel": "Value(s) Needed (check all that apply)",
                "orderIndex": "2.2.10",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "As Is",
                        "value": "AsIs",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Market Value",
                        "value": "Market Value",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "As Completed",
                        "value": "AsCompleted",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Prospective Market Value",
                        "value": "Prospective Market Value",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "As Stabilized",
                        "value": "AsStabilized",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Liquidation Value (90 days)",
                        "value": "Liquidation Value (90 days)",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Other",
                        "value": "Other",
                        "orderIndex": 4,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "checkbox"
            },
            {
                "fieldName": "NumBuildings",
                "fieldLabel": "Number of Buildings",
                "orderIndex": "2.2.11",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
                
            },
            {
                "fieldName": "BuildingSize",
                "fieldLabel": "Improvement Size As Is",
                "orderIndex": "2.2.12",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "modifiedbuildingfield"
            },
            {
                "fieldName": "BuildingSizeCompleted",
                "fieldLabel": "Improvement Size As Complete",
                "orderIndex": "2.2.10",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "modifiedbuildingfield"
            },
            {
                "fieldName": "LandSize",
                "fieldLabel": "Land Area",
                "orderIndex": "2.2.11",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "modifiedlandfield"
            },
            {
                "fieldName": "ExcessLand",
                "fieldLabel": "Excess Land",
                "orderIndex": "2.2.12",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "modifiedlandfield"
            },
            {
                "fieldName": "YearBuilt",
                "fieldLabel": "Year Built",
                "orderIndex": "2.2.13",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "Tenancy",
                "fieldLabel": "Property Tenancy",
                "orderIndex": "2.2.14",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Owner Occupied 100%",
                        "value": "Owner Occupied 100%",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Owner Occupied >=50%",
                        "value": "Owner Occupied >=50%",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Owner Occupied <50%",
                        "value": "Owner Occupied <50%",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Single Tenant Investor",
                        "value": "Single Tenant Investor",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "Multi-Tenant Investor",
                        "value": "Multi-Tenant Investor",
                        "orderIndex": 5,
                        "parent": ""
                    },
                    {
                        "name": "Vacant",
                        "value": "Vacant",
                        "orderIndex": 6,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
            },
            {
                "fieldName": "Occupancy",
                "fieldLabel": "Current Occupancy %",
                "orderIndex": "2.2.15",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
                
            },
            {
                "fieldName": "Tenants",
                "fieldLabel": "Number of Tenants",
                "orderIndex": "2.2.16",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "HasRenovation",
                "fieldLabel": "Proposed Renovation?",
                "orderIndex": "2.2.17",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Yes",
                        "value": 1,
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "No",
                        "value": 0,
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "radio"
            },
            {
                "fieldName": "RenevationDesc",
                "fieldLabel": "Proposed Renovation Description",
                "orderIndex": "2.2.18",
                "required": 0,
                "viewStatus": 0,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "Zoning",
                "fieldLabel": "Zoning",
                "orderIndex": "2.2.19",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "PropertyStatus",
                "fieldLabel": "Property Status",
                "orderIndex": "2.2.20",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Existing",
                        "value": "Existing",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Vacant Land",
                        "value": "Vacant Land",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Proposed",
                        "value": "Proposed",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Under Construction",
                        "value": "Under Construction",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "Under Renovation",
                        "value": "Under Renovation",
                        "orderIndex": 5,
                        "parent": ""
                    },
                    {
                        "name": "New Addition",
                        "value": "New Addition",
                        "orderIndex": 6,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "dropdown"
            },
            {
                "fieldName": "HasUseChange",
                "fieldLabel": "Proposed Change in Use?",
                "orderIndex": "2.2.21",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Yes",
                        "value": 1,
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "No",
                        "value": 0,
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "radio"
            },
            {
                "fieldName": "ProposedUse",
                "fieldLabel": "Proposed Use",
                "orderIndex": "2.2.22",
                "required": 0,
                "viewStatus": 0,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "HasGroundLease",
                "fieldLabel": "Ground Lease?",
                "orderIndex": "2.2.23",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Yes",
                        "value": 1,
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "No",
                        "value": 0,
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "radio"
            },
            {
                "fieldName": "GroundLeaseDesc",
                "fieldLabel": "Ground Lease Description",
                "orderIndex": "2.2.24",
                "required": 0,
                "viewStatus": 0,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "IsForSale",
                "fieldLabel": "Currently Listed for Sale?",
                "orderIndex": "2.2.25",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Yes",
                        "value": 1,
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "No",
                        "value": 0,
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "radio"
            },
            {
                "fieldName": "ListPrice",
                "fieldLabel": "List Price",
                "orderIndex": "2.2.26",
                "required": 0,
                "viewStatus": 0,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "HasRecentSale",
                "fieldLabel": "Pending or Recent Sale?",
                "orderIndex": "2.2.27",
                "required": 0,
                "viewStatus": 1,
                "options": [
                    {
                        "name": "Yes",
                        "value": 1,
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "No",
                        "value": 0,
                        "orderIndex": 2,
                        "parent": ""
                    }
                ],
                "tooltip": null,
                "fieldType" : "radio"
            },
            
            {
                "fieldName": "SalePrice",
                "fieldLabel": "Sale Price",
                "orderIndex": "2.2.28",
                "required": 0,
                "viewStatus": 0,
                "options": null,
                "tooltip": null,
                "fieldType" : "textfield"
            },
            {
                "fieldName": "SaleDate",
                "fieldLabel": "Date Sold or Closing Date",
                "orderIndex": "2.2.29",
                "required": 0,
                "viewStatus": 0,
                "options": null,
                "tooltip": null,
                "fieldType" : "date"
            },
            {
                "fieldName": "PropertyDescription",
                "fieldLabel": "Property Description",
                "orderIndex": "2.2.30",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textarea"
                
            },
            {
                "fieldName": "LegalDescription",
                "fieldLabel": "Legal Description",
                "orderIndex": "2.2.31",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textarea"
            },
            {
                "fieldName": "Comments",
                "fieldLabel": "Requester Comments",
                "orderIndex": "2.2.32",
                "required": 0,
                "viewStatus": 1,
                "options": null,
                "tooltip": null,
                "fieldType" : "textarea"
            },
            {
                "fieldname": "Units",
                "fieldLabel": "BuildingSizeUnits",
                "orderIndex": null,
                "viewStatus": null,
                "parentDataField": "BuildingSize",
                "options": [
                    {
                        "name": "Acres",
                        "value": "Acres",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Animal Units",
                        "value": "Animal Units",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Beds",
                        "value": "Beds",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Bldngs",
                        "value": "Bldngs",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "Bushels",
                        "value": "Bushels",
                        "orderIndex": 5,
                        "parent": ""
                    },
                    {
                        "name": "CF - Cubic Feet",
                        "value": "CF - Cubic Feet",
                        "orderIndex": 6,
                        "parent": ""
                    },
                    {
                        "name": "Holes - Golf",
                        "value": "Holes - Golf",
                        "orderIndex": 7,
                        "parent": ""
                    },
                    {
                        "name": "Lanes",
                        "value": "Lanes",
                        "orderIndex": 8,
                        "parent": ""
                    },
                    {
                        "name": "LF - Lineal Feet",
                        "value": "LF - Lineal Feet",
                        "orderIndex": 9,
                        "parent": ""
                    },
                    {
                        "name": "Lots",
                        "value": "Lots",
                        "orderIndex": 10,
                        "parent": ""
                    },
                    {
                        "name": "Outparcels",
                        "value": "Outparcels",
                        "orderIndex": 11,
                        "parent": ""
                    },
                    {
                        "name": "Pads",
                        "value": "Pads",
                        "orderIndex": 12,
                        "parent": ""
                    },
                    {
                        "name": "Rooms",
                        "value": "Rooms",
                        "orderIndex": 13,
                        "parent": ""
                    },
                    {
                        "name": "Screens",
                        "value": "Screens",
                        "orderIndex": 14,
                        "parent": ""
                    },
                    {
                        "name": "Seats",
                        "value": "Seats",
                        "orderIndex": 15,
                        "parent": ""
                    },
                    {
                        "name": "SF",
                        "value": "SF",
                        "orderIndex": 16,
                        "parent": ""
                    },
                    {
                        "name": "SF - GBA",
                        "value": "SF - GBA",
                        "orderIndex": 17,
                        "parent": ""
                    },
                    {
                        "name": "SF - GLA",
                        "value": "SF - GLA",
                        "orderIndex": 18,
                        "parent": ""
                    },
                    {
                        "name": "SF - Land",
                        "value": "SF - Land",
                        "orderIndex": 19,
                        "parent": ""
                    },
                    {
                        "name": "SF - NLA",
                        "value": "SF - NLA",
                        "orderIndex": 20,
                        "parent": ""
                    },
                    {
                        "name": "SFR's",
                        "value": "SFR's",
                        "orderIndex": 21,
                        "parent": ""
                    },
                    {
                        "name": "Sites",
                        "value": "Sites",
                        "orderIndex": 22,
                        "parent": ""
                    },
                    {
                        "name": "Slips",
                        "value": "Slips",
                        "orderIndex": 23,
                        "parent": ""
                    },
                    {
                        "name": "Spaces",
                        "value": "Spaces",
                        "orderIndex": 24,
                        "parent": ""
                    },
                    {
                        "name": "Tons",
                        "value": "Tons",
                        "orderIndex": 25,
                        "parent": ""
                    },
                    {
                        "name": "Units",
                        "value": "Units",
                        "orderIndex": 26,
                        "parent": ""
                    }
                ]
            },
            {
                "fieldname": "Units",
                "fieldLabel": "BuildingSizeCompletedUnits",
                "orderIndex": null,
                "viewStatus": null,
                "parentDataField": "BuildingSizeCompleted",
                "options": [
                    {
                        "name": "Acres",
                        "value": "Acres",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Animal Units",
                        "value": "Animal Units",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Beds",
                        "value": "Beds",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Bldngs",
                        "value": "Bldngs",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "Bushels",
                        "value": "Bushels",
                        "orderIndex": 5,
                        "parent": ""
                    },
                    {
                        "name": "CF - Cubic Feet",
                        "value": "CF - Cubic Feet",
                        "orderIndex": 6,
                        "parent": ""
                    },
                    {
                        "name": "Holes - Golf",
                        "value": "Holes - Golf",
                        "orderIndex": 7,
                        "parent": ""
                    },
                    {
                        "name": "Lanes",
                        "value": "Lanes",
                        "orderIndex": 8,
                        "parent": ""
                    },
                    {
                        "name": "LF - Lineal Feet",
                        "value": "LF - Lineal Feet",
                        "orderIndex": 9,
                        "parent": ""
                    },
                    {
                        "name": "Lots",
                        "value": "Lots",
                        "orderIndex": 10,
                        "parent": ""
                    },
                    {
                        "name": "Outparcels",
                        "value": "Outparcels",
                        "orderIndex": 11,
                        "parent": ""
                    },
                    {
                        "name": "Pads",
                        "value": "Pads",
                        "orderIndex": 12,
                        "parent": ""
                    },
                    {
                        "name": "Rooms",
                        "value": "Rooms",
                        "orderIndex": 13,
                        "parent": ""
                    },
                    {
                        "name": "Screens",
                        "value": "Screens",
                        "orderIndex": 14,
                        "parent": ""
                    },
                    {
                        "name": "Seats",
                        "value": "Seats",
                        "orderIndex": 15,
                        "parent": ""
                    },
                    {
                        "name": "SF",
                        "value": "SF",
                        "orderIndex": 16,
                        "parent": ""
                    },
                    {
                        "name": "SF - GBA",
                        "value": "SF - GBA",
                        "orderIndex": 17,
                        "parent": ""
                    },
                    {
                        "name": "SF - GLA",
                        "value": "SF - GLA",
                        "orderIndex": 18,
                        "parent": ""
                    },
                    {
                        "name": "SF - Land",
                        "value": "SF - Land",
                        "orderIndex": 19,
                        "parent": ""
                    },
                    {
                        "name": "SF - NLA",
                        "value": "SF - NLA",
                        "orderIndex": 20,
                        "parent": ""
                    },
                    {
                        "name": "SFR's",
                        "value": "SFR's",
                        "orderIndex": 21,
                        "parent": ""
                    },
                    {
                        "name": "Sites",
                        "value": "Sites",
                        "orderIndex": 22,
                        "parent": ""
                    },
                    {
                        "name": "Slips",
                        "value": "Slips",
                        "orderIndex": 23,
                        "parent": ""
                    },
                    {
                        "name": "Spaces",
                        "value": "Spaces",
                        "orderIndex": 24,
                        "parent": ""
                    },
                    {
                        "name": "Tons",
                        "value": "Tons",
                        "orderIndex": 25,
                        "parent": ""
                    },
                    {
                        "name": "Units",
                        "value": "Units",
                        "orderIndex": 26,
                        "parent": ""
                    }
                ]
            },
            {
                "fieldname": "Units",
                "fieldLabel": "LandSizeUnits",
                "orderIndex": null,
                "viewStatus": null,
                "parentDataField": "LandSize",
                "options": [
                    {
                        "name": "Acres",
                        "value": "Acres",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Lots",
                        "value": "Lots",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Outparcels",
                        "value": "Outparcels",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Pads",
                        "value": "Pads",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "SF - Land",
                        "value": "SF - Land",
                        "orderIndex": 5,
                        "parent": ""
                    },
                    {
                        "name": "Sites",
                        "value": "Sites",
                        "orderIndex": 6,
                        "parent": ""
                    },
                    {
                        "name": "Units",
                        "value": "Units",
                        "orderIndex": 7,
                        "parent": ""
                    }
                ]
            },
            {
                "fieldname": "Units",
                "fieldLabel": "ExcessLandUnits",
                "orderIndex": null,
                "viewStatus": null,
                "parentDataField": "ExcessLand",
                "options": [
                    {
                        "name": "Acres",
                        "value": "Acres",
                        "orderIndex": 1,
                        "parent": ""
                    },
                    {
                        "name": "Lots",
                        "value": "Lots",
                        "orderIndex": 2,
                        "parent": ""
                    },
                    {
                        "name": "Outparcels",
                        "value": "Outparcels",
                        "orderIndex": 3,
                        "parent": ""
                    },
                    {
                        "name": "Pads",
                        "value": "Pads",
                        "orderIndex": 4,
                        "parent": ""
                    },
                    {
                        "name": "SF - Land",
                        "value": "SF - Land",
                        "orderIndex": 5,
                        "parent": ""
                    },
                    {
                        "name": "Sites",
                        "value": "Sites",
                        "orderIndex": 6,
                        "parent": ""
                    },
                    {
                        "name": "Units",
                        "value": "Units",
                        "orderIndex": 7,
                        "parent": ""
                    }
                ]
            }
            
                          
        ]
        
    
    
    }
]