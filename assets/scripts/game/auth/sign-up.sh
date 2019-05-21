# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

# don't use a password you use for any real websites!
curl "https://wdi-library-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo

# line 7 tells comp that data we're sending is in json format
