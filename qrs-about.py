import requests

requests.packages.urllib3.disable_warnings()

#Set up necessary headers comma separated
xrf = 'abcdefghijklmnop'
headers = {'X-Qlik-xrfkey': xrf,
"Content-Type": "application/json",
"X-Qlik-User":"UserDirectory=INTERNAL;UserId=sa_api"}

#Set up the certificate path
cert = ('C:/ProgramData/Qlik/Sense/Repository/Exported Certificates/.Local Certificates/client.pem', 'C:/ProgramData/Qlik/Sense/Repository/Exported Certificates/.Local Certificates/client_key.pem')

#Set the endpoint URL
url = 'https://localhost:4242/qrs/app/full?xrfkey={}'.format(xrf)

#Call the endpoint to get the list of Qlik Sense apps
resp = requests.get(url, headers=headers, verify=False, cert=cert)

if resp.status_code != 200:
    # Returns an error if something went wrong.
    raise ApiError('GET /qrs/app/full {}'.format(resp.status_code))
for app in resp.json():
    print('{} {}'.format(app['id'], app['name']))