export const schema = {
    "models": {
        "Provider": {
            "name": "Provider",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Details": {
                    "name": "Details",
                    "isArray": false,
                    "type": {
                        "nonModel": "Details"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EmailsWeReceive": {
                    "name": "EmailsWeReceive",
                    "isArray": false,
                    "type": {
                        "nonModel": "EmailsWeReceive"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Properties": {
                    "name": "Properties",
                    "isArray": false,
                    "type": {
                        "nonModel": "Properties"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Providers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "ValidHeadOfficeLocation": {
            "name": "ValidHeadOfficeLocation",
            "values": [
                "DE",
                "EU",
                "NONEU"
            ]
        }
    },
    "nonModels": {
        "Details": {
            "name": "Details",
            "fields": {
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Description": {
                    "name": "Description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "HeadOfficeLocation": {
                    "name": "HeadOfficeLocation",
                    "isArray": false,
                    "type": {
                        "enum": "ValidHeadOfficeLocation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "InfolineMail": {
                    "name": "InfolineMail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ComplaintMail": {
                    "name": "ComplaintMail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Website": {
                    "name": "Website",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "EmailsWeReceive": {
            "name": "EmailsWeReceive",
            "fields": {
                "Voucher": {
                    "name": "Voucher",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Cancellation": {
                    "name": "Cancellation",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Confirmation": {
                    "name": "Confirmation",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Properties": {
            "name": "Properties",
            "fields": {
                "IsSupplyingCars": {
                    "name": "IsSupplyingCars",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ShouldPerformPriceCheck": {
                    "name": "ShouldPerformPriceCheck",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "HasCustomLookupPage": {
                    "name": "HasCustomLookupPage",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "8efff4fb1b174c1703cb916938eb5e02"
};