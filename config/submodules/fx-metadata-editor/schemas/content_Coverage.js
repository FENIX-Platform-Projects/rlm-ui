define({
    "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "content_Coverage",
        "title": "Coverage",
        "type": "object",
        "required": ["coverageGeographic"],
        "properties": {
            "sector": {
                "title": "Sector",
                "type": "object"
            },
            "prodStats": {
                "title": "Production"
            },
            "foodStats": {
                "title": "Food availability"
            },
            "tradeStats": {
                "title": "Trade"
            },
            "machStats": {
                "title": "Machinery"
            },
            "popStats": {
                "title": "Population"
            },
            "priceStats": {
                "title": "Prices"
            },
            "valStats": {
                "title": "Value added"
            },
            "landStats": {
                "title": "Land use"
            },
            "empStats": {
                "title": "Employment"
            },
            "waterStats": {
                "title": "Water"
            },
            "liveStats": {
                "title": "Livestock"
            },
            "natStats": {
                "title": "National account"
            },
            "fishStats": {
                "title": "Fishery"
            },
            "coverageSectorsDetails": {
                "title": "Main sector(s)",
                "type": "string"
            },
            "coverageTime": {
                "title": "Coverage period",
                "type": "object",
                "required": ["from", "to"],
                "properties": {
                    "from": {
                        "title": "From",
                        "format": "date"
                    },
                    "to": {
                        "title": "To",
                        "format": "date"
                    }
                }
            },
            "coverageGeographic": {
                "title": "Geographic extent",
                "uniqueItems": true
            }
        },
        "dependencies": {
            "prodStats": ["sector"],
            "foodStats": ["sector"],
            "tradeStats": ["sector"],
            "machStats": ["sector"],
            "popStats": ["sector"],
            "priceStats": ["sector"],
            "valStats": ["sector"],
            "landStats": ["sector"],
            "empStats": ["sector"],
            "waterStats": ["sector"],
            "liveStats": ["sector"],
            "natStats": ["sector"],
            "fishStats": ["sector"]
        }
    },
    "options": {
        "fields": {
            "sector": {
                "type": "select",
                "dataSource": {
                    "Production": "Production",
                    "Food availability": "Food availability",
                    "Trade": "Trade",
                    "Machinery": "Machinery",
                    "Population": "Population",
                    "Prices": "Prices",
                    "Value added": "Value added",
                    "Land use": "Land use",
                    "Employment": "Employment",
                    "Water": "Water",
                    "Livestock": "Livestock",
                    "National account": "National account",
                    "Fishery": "Fishery"
                },
                "helper": "Sector(s) the resource refers to as specified in the selected codelist. The word \u0027Sector\u0027 indicates the subject area the resource refers to. These sectors can be institutional sectors, economic or other sectors (e.g. local government sector, agriculture, forestry, business services, etc.)."
            },
            "prodStats": {
                "type": "select",
                "dataSource": {
                    "0101": "Production quantity",
                    "0102": "Production value",
                    "0103": "Yield",
                    "0104": "Area Harvested",
                    "0105": "Area sown",
                    "0106": "Seeds quantity"
                },
                "dependencies": {
                    "sector": "Production"
                }
            },
            "foodStats": {
                "type": "select",
                "dataSource": {
                    "0201": "Protein quantity",
                    "0202": "Food supply quantity",
                    "0203": "Lipid quantity"
                },
                "dependencies": {
                    "sector": "Food availability"
                }
            },
            "tradeStats": {
                "type": "select",
                "dataSource": {
                    "0301": "Export quantity",
                    "0302": "Export value",
                    "0303": "Import quantity",
                    "0304": "Import value",
                    "0305": "Consumption quantity",
                    "0306": "Re-export quantity",
                    "0307": "Re-export value",
                    "0308": "Re-import quantity",
                    "0309": "Re-import value"
                },
                "dependencies": {
                    "sector": "Trade"
                }
            },
            "machStats": {
                "type": "select",
                "dataSource": {
                    "0401": "Machines in service"
                },
                "dependencies": {
                    "sector": "Machinery"
                }
            },
            "popStats": {
                "type": "select",
                "dataSource": {
                    "0501": "Population",
                    "0502": "Economically active population",
                    "0503": "Population total density",
                    "0504": "Population growth Rate ",
                    "0505": "Life expectancy"
                },
                "dependencies": {
                    "sector": "Population"
                }
            },
            "priceStats": {
                "type": "select",
                "dataSource": {
                    "0601": "Consumer price",
                    "0602": "Producer price",
                    "0603": "Commercial rate",
                    "0604": "Official rate",
                    "0605": "Wholesale price",
                    "0606": "Annual average price"
                },
                "dependencies": {
                    "sector": "Prices"
                }
            },
            "valStats": {
                "type": "select",
                "dataSource": {
                    "0701": "Constant prices",
                    "0702": "Current prices"
                },
                "dependencies": {
                    "sector": "Value added"
                }
            },
            "landStats": {
                "type": "select",
                "dataSource": {
                    "0801": "Administrative Area",
                    "0802": "Agricultural area",
                    "0803": "Arable land",
                    "0804": "Arable land and permanent crops area",
                    "0805": "Area equipped for irrigation",
                    "0806": "Fallow Land",
                    "0807": "Forest area",
                    "0808": "Inland water",
                    "0809": "Land Area",
                    "0810": "Other land?",
                    "0811": "Other wooded land",
                    "0812": "Permanent crops area",
                    "0813": "Permanent meadows and pastures",
                    "0814": "Temporary crops area",
                    "0815": "Temporary meadows and pastures"
                },
                "dependencies": {
                    "sector": "Land use"
                }
            },
            "empStats": {
                "type": "select",
                "dataSource": {
                    "0901": "Unemployment Rate ",
                    "0902": "Labourforce Participation Rate"
                },
                "dependencies": {
                    "sector": "Employment"
                }
            },
            "waterStats": {
                "type": "select",
                "dataSource": {
                    "1001": "Min temperature",
                    "1002": "Average rainfall",
                    "1003": "Max temperature"
                },
                "dependencies": {
                    "sector": "Water"
                }
            },
            "liveStats": {
                "type": "select",
                "dataSource": {
                    "1101": "Slaughtered animals",
                    "110102": "Slaughtered animals - Lactating Animals",
                    "110101": "Slaughtered animals - Female Live Animals",

                    "1102": "Live animals",
                    "110203": "Live animals - Male animals",
                    "110204": "Live animals - Born Animals",
                    "110205": "Live animals - Bought Animals",
                    "110206": "Live animals - Animals got as gift",
                    "110207": "Live animals - Animals got for caretaking",
                    "110208": "Live animals - Sold Animals",
                    "110209": "Live animals - Stolen Animals",
                    "110210": "Live animals - Animals given for caretaking",
                    "110211": "Live animals - Animals given as gift",
                    "1103": "Laying hens",
                    "1104": "Dead Animals",
                    "1105": "Total Input",
                    "1106": "Total Output"
                },
                "dependencies": {
                    "sector": "Livestock"
                }
            },
            "natStats": {
                "type": "select",
                "dataSource": {
                    "1201": "GPD",
                    "1202": "GDP growth",
                    "1203": "GDP per capita"
                },
                "dependencies": {
                    "sector": "National account"
                }
            },

            "fishStats": {
                "type": "select",
                "dataSource": {
                    "130101": "Inland Aquaculture production",
                    "13010201": "Aquaculture production - Industrial Marine Aquaculture production",
                    "13010202": "Aquaculture production - Artisanal Marine Aquaculture production",
                    "130103": "Marine/Brackish Aquaculture production",
                    "130201": "Inland Capture production",
                    "13020201": "Capture production - Industrial Marine Capture production",
                    "13020202": "Capture production - Artisanal Marine Capture production",
                    "130203": "Marine/Brackish Capture production"
                },
                "dependencies": {
                    "sector": "Fishery"
                }
            },

            "coverageSectorsDetails": {
                "helper": "Textual element delimiting the statistical results with regard to the main sectors covered."
            },
            "coverageTime": {
                "helper": "Information about the time period for which data are available. It requests to report the time window of reference (reporting the starting date and the ending date) even if it presents some lacks.",
                "fields": {
                    "from": {
                        "picker": {
                            "format": "DD/MM/YYYY"
                        }
                    },
                    "to": {
                        "picker": {
                            "format": "DD/MM/YYYY"
                        }
                    }
                }
            },
            "coverageGeographic": {
                "type": "select",
                "multiple": true,
                "size": 10,
                "dataSource": "./submodules/fenix-ui-metadata-editor/config/CL/CL_GAUL0.json",
                "helper": "Geographical coverage represented by the resource. It is highly recommended to make reference to officially recognized or easily identifiable macro-areas (e.g. South Saharan Africa, North America, OECD member countries..)."
            }
        }
    }
});
