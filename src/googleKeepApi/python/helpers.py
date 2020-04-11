import gkeepapi
import keyring

KEYRING_KEY = 'google-keep-token'

def getKeep(username):
  keep = gkeepapi.Keep()
  token = keyring.get_password(KEYRING_KEY, username)
  print(token)
  keep.resume(token)

  return keep

def login(username, password):
    keep = gkeepapi.Keep()

    keep.login(username, password)
    masterToken = keep.getMasterToken()
    keyring.set_password(KEYRING_KEY, username, masterToken)

    return keep