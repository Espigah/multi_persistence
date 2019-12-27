cd ..

kubectl apply -f \
couch-service.yaml,\
mongo-service.yaml,\
node-express-service.yaml,\
postgres-service.yaml,\
redis-service.yaml,\
couch-deployment.yaml,\
mongo-deployment.yaml,\
node-express-deployment.yaml,\
postgres-deployment.yaml,\
redis-deployment.yaml


