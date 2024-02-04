FROM ubuntu:latest


#Install postfix
# Install Postfix.
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y postfix vim telnet mailutils && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY main.cf /etc/postfix/main.cf

EXPOSE 25

CMD ["postfix", "start-fg"]

