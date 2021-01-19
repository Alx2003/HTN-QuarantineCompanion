#!/bin/sh

git filter-branch --env-filter '

OLD_EMAIL="email you just saw in .patch"
CORRECT_NAME=“correct username, you can check it in your terminal git config --global user.name”
CORRECT_EMAIL=“correct email, you can check it with git config --global user.email”

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

