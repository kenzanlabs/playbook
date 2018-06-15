# Kenzan Agile Playbook

## Installation
```npm install```

## Run locally in debug mode

```npm start```

## Run test

```npm run-script test```

## Production build

```npm run-script build```


## OAUTH TOKEN NOTES
See: https://cloud.google.com/container-builder/docs/securing-builds/use-encrypted-secrets-credentials

Environment variables:
```
KEY_RING=kzn-playbook
KEY_NAME=kzn-playbook-build-key
```
To create a KeyRing, run the following command in your shell or terminal window:
```
gcloud kms keyrings create $KEY_RING \
  --location=global
```

To create a CryptoKey:
```
gcloud kms keys create $KEY_NAME \
  --location=global \
  --keyring=$KEY_RING \
  --purpose=encryption
```

Visit the GCP Console IAM menu.
Copy the Container Builder service account email address, which contains @cloudbuild.gserviceaccount.com.
Visit the GCP Console Encryption Keys menu.
Select your KeyRing from the list, then click Permission.
Fill the Add members field with the service account email address.
From the Roles drop-down menu, choose Cloud KMS CryptoKey Decrypter.
Click Add.


Encrypt the env file:
```
gcloud kms encrypt \
  --plaintext-file=.env \
  --ciphertext-file=.env.enc \
  --location=global \
  --keyring=$KEY_RING \
  --key=$KEY_NAME
  ```

  Decrypt in the cloudbuild.yaml:
   
