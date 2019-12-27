
# Use the production image as base image
FROM fabriciogoncalves/stock_server_node_express

# Copy the test files
COPY ./*.spec.js ./*.spec.js

# Override the NODE_ENV environment variable to 'dev', in order to get required test packages
ENV NODE_ENV dev

WORKDIR /home/node/app


# 1. Get test packages;
RUN npm install

# Override the command, to run the test instead of the application
CMD ["npm", "run", "test"]