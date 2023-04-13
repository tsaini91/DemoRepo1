{
  "aboutToExpireSearchRules": {
    "searchCriteria": {
      "searchByRecordGroup":"Cannabis",
      "searchByRecordType":"Medical",
      "searchByRecordSubType":"",
      "searchByRecordCategory":"License",
      "searchStatus": "Active",
      "searchByDaysOut": 60,
      "searchByFromDate": false,
      "searchByToDate": false,
      "expiringInterval":"nextquarter",
      "notificationConfScript":"CONF_CANNABIS_MD_LICENSE_EXPIRATION_NOTICE",
      "firstNotice": "60 Day Notice",
      "excludeRecordType": [{
          "type": "Licenses/Type/Subtype/Category"
        },
        {
          "type": "Licenses/Type/Subtype/Category"
        }
      ],
      "excludeRecordStatus": [{
          "status": "Revoked"
        },
        {
          "status": "Closed"
        }
      ],
      "adminEmail": "mwright@accela.com",
      "batchResultEmailTemplate": "BATCH_LICENSE_RENEWAL_RESULTS"
    }
  },
  "expirationNoticeSearchRules": {
	    "searchCriteria": {
	      "searchByRecordGroup": "Cannabis",
	      "searchByRecordType": "Medical",
	      "searchByRecordSubType": "*",
	      "searchByRecordCategory": "License",
	      "searchByRecordStatus": "",
	      "searchByDaysOut": 1,
	      "searchByFromDate": false,
	      "searchByToDate": false,
	      "notificationConfScript": "CONF_CANNABIS_AU_LICENSE_EXPIRATION_NOTICE",
	      "excludeRecordType": [],
	      "excludeRecordStatus": [
	        {
	          "status": "Revoked"
	        },
	        {
	          "status": "Closed"
	        }
	      ],
	      "adminEmail": "cli@accela.com",
	      "batchResultEmailTemplate": "BATCH_LICENSE_RENEWAL_RESULTS"
	    }
	 }
}