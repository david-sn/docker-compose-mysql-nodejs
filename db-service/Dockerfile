FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD root  
ENV MYSQL_DATABASE cypress  
ENV MYSQL_USER users_service  
ENV MYSQL_PASSWORD root
ENV DATABASE_HOST=db

ADD setup.sql /docker-entrypoint-initdb.d