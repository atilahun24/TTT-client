# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://wdi-library-api.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo

# // sending api a request to change password, using token to let it know that it's you
