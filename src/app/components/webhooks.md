curl -XPOST https://RweqvQFhv:9e57af31-90fd-4f09-b06d-8c3c2a53ca76@scalr.api.appbase.io/braintree/.percolator/ -d '

{
    "query":{
	    "range" : {
	        "count" : {
	            "gte" : 100000000
	        }
	    }
    }
,
"type": "test",
"webhooks": [{ "method": "GET", "url": "http://104.236.204.23:8080/api/enterprise"}]}'

curl -XPOST https://RweqvQFhv:9e57af31-90fd-4f09-b06d-8c3c2a53ca76@scalr.api.appbase.io/braintree/.percolator/ -d '
{
    "query":{
	    "range" : {
	        "count" : {
	            "gte" : 50000000
	        }
	    }
    }
,
"type": "test",
"webhooks": [{ "method": "GET", "url": "http://104.236.204.23:8080/api/premier"}]}'

curl -XPOST https://RweqvQFhv:9e57af31-90fd-4f09-b06d-8c3c2a53ca76@scalr.api.appbase.io/braintree/.percolator/ -d '
{
    "query":{
	    "range" : {
	        "count" : {
	            "gte" : 10000000
	        }
	    }
    }
,
"type": "test",
"webhooks": [{ "method": "GET", "url": "http://104.236.204.23:8080/api/startup"}]}'

curl -XPOST https://RweqvQFhv:9e57af31-90fd-4f09-b06d-8c3c2a53ca76@scalr.api.appbase.io/braintree/.percolator/ -d '
{
    "query":{
	    "range" : {
	        "count" : {
	            "gte" : 1000000
	        }
	    }
    }
,
"type": "test",
"webhooks": [{ "method": "GET", "url": "http://104.236.204.23:8080/api/growth"}]}'

curl -XPOST https://RweqvQFhv:9e57af31-90fd-4f09-b06d-8c3c2a53ca76@scalr.api.appbase.io/braintree/.percolator/ -d '
{
    "query":{
	    "range" : {
	        "count" : {
	            "gte" : 100000
	        }
	    }
    }
,
"type": "test",
"webhooks": [{ "method": "GET", "url": "http://104.236.204.23:8080/api/hacker"}]}'

curl -XPOST https://RweqvQFhv:9e57af31-90fd-4f09-b06d-8c3c2a53ca76@scalr.api.appbase.io/braintree/.percolator/ -d '
{
    "query":{
	    "range" : {
	        "count" : {
	            "lt" : 100000
	        }
	    }
    }
,
"type": "test",
"webhooks": [{ "method": "GET", "url": "http://104.236.204.23:8080/api/free"}]}'






