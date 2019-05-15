curl "https://wdi-library-api.herokuapp.com/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

echo
