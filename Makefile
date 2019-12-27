.PHONY: all  build_db build_server build_client

all: build_db build_server build_client

build_db:
	@echo "=========== build_db ==========="
	docker build -t fabriciogoncalves/stock_db_couch ./db/couchdb/
	docker build -t fabriciogoncalves/stock_db_postgres ./db/postgres/
	docker build -t fabriciogoncalves/stock_db_mongo ./db/mongo/
	docker build -t fabriciogoncalves/stock_db_redis ./db/redis/

build_server:
	@echo "=========== build_server ==========="
	docker build -t fabriciogoncalves/stock_server_node_express ./server/node_express/

#build_client:
#	@echo ""=========== build_client "==========="@TODO ajustar o docker file
#	docker build -t fabriciogoncalves/stock_client_angularjs ./client/angularjs/	
#	docker build -t fabriciogoncalves/stock_client_angular ./client/angular/	


	