#!/bin/bash
./push.sh stock_db_couch

./push.sh stock_db_postgre

./push.sh stock_db_mongo

./push.sh stock_db_redis

./push.sh stock_server_node_express