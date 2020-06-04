#!/usr/bin/env bash
SH=`cd $(dirname $BASH_SOURCE) && pwd`  # SH aka SCRIPT_HOME
AH=`cd $SH/.. && pwd`  # AH aka APP_HOME

source "$SH/.env"

cd $AH
    set -x  # print executed command ON
            docker build --file "$SH/Dockerfile" -t $IMAGE_NAME      $AH
            #                                    docker image name   source_folder
    set +x  # print executed command OFF
cd - 1>/dev/null
