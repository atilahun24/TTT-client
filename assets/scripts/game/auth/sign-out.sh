# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://wdi-library-api.herokuapp.com/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

echo
