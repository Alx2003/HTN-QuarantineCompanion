#!/bin/sh

git filter-branch --env-filter '

if [ "$GIT_COMMITTER_EMAIL" = "haoming@caroline.hitronhub.home" ]
then
    export GIT_COMMITTER_NAME="hewlett-packard-lovecraft"
    export GIT_COMMITTER_EMAIL="mrmist3r311@gmail.com"
fi
if [ "$GIT_AUTHOR_EMAIL" = "haoming@caroline.hitronhub.home" ]
then
    export GIT_AUTHOR_NAME="hewlett-packard-lovecraft"
    export GIT_AUTHOR_EMAIL="mrmist3r311@gmail.com"
fi
' --tag-name-filter cat -- --branches --tags

