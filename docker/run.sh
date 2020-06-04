#!/usr/bin/env bash
SH=`cd $(dirname $BASH_SOURCE) && pwd`  # SH aka SCRIPT_HOME
AH=`cd $SH/.. && pwd`  # AH aka APP_HOME

source "$SH/.env"

docker stop -t1  $CONTAINER
docker rm -f     $CONTAINER

echo
cd $AH
    set -x  # print executed command ON
        docker run   -p $PORT:3000   --name  $CONTAINER     -d                  -it              $IMAGE_NAME
        #            port mapping    container name as kc   run as daemon       CRITICAL NOTE:
        #                                                   run as background   must have this -it param
    set +x  # print executed command OFF
cd - 1>/dev/null

echo
sleep 2  # wait a while to list the container
docker ps | grep -E " $CONTAINER|$PORT|$IMAGE_NAME|IMAGE" --color=always

echo
sleep 2  # wait a while to list the container
docker logs $CONTAINER

