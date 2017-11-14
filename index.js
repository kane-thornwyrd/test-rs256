const crypto = require('crypto');

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAoC89wJ/H9rs2bKUmokL/
wcwQ4rYoVZsPmVz+F53XmovjKwH5vKRgMpYlL+XrAX5M7jJ7n2BYiTwkmBaL1YOc
7EzzCRuwf8tS+wAykhvcyvmS8jvaSt9p6a2GMjluHnNMHbTWsijMH1PFYSxcC458
6OLE4GNsqIF0vV2LtXBDgsyE7CpN2BwGZCYDVLgGzArUeB1JURkDlUJ+Ur9wzdar
jFFjRO6R6om6/x+e5yZUFrP2hxm2A7mFAvH2FoUG3R8M/Od2oPbq6f6n0wncgK/Y
N68PQAZM64DVGqsNpExF+OGVQT1f3c3XYrNXtnRG9oiMBR6gYUvnFAerOjefVmMd
bvtoq/MivsOutlYGwbRrUoclp1NV4dABWJ9/e6TMmysJnFd7JiiKS5TyxKiwVDwe
gHW5Z/+SkxZVqRzpMhwNmbnG7Pn447GqYFzu5ACjYKJwgETHSf6L3sEF72SryBix
4jLL1uYDS6MBmz/dXY8RQFEvugqi0crH7XmPpdK/tQVWENcPiuhkFqpnfpR/RDWN
BJRnwM5ruVshWKWTZqe2w27vdjHvf8fEBfx6MKhXmbf7G6rSx6PYMxJYRJTryyF1
vh6MzK9XdFwQKsOL5UeLeJmlGITBlP3CdTtXEBYcfahaD72W4wSkLUjgWsPwxgqf
X0jZU4ocHJylDbi4SBBTpMUCAwEAAQ==
-----END PUBLIC KEY-----`;

const payload = 'marie.dupond@bollore.com|1508509220850';

const payloadParser = pl => {
  const tmp = pl.split('|');
  return tmp;
};


async function Main(){
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(payload);
  const signature = sign.sign(privateKey);

  console.log(`${payload}|${signature.toString('hex')}`);

  const verify = crypto.createVerify('RSA-SHA256');
  verify.update(payload);
  // const key = await openpgp.generateKey({
  //   userIds: [{ name:'Jon Smith', email:'jon@example.com' }],
  //   numBits: 2048,
  //   // passphrase: 'super long and hard to guess secret',
  // });

  // const pKey = openpgp.key.readArmored(key.privateKeyArmored).keys[0];
  // pKey.decrypt();

  // const signed = await openpgp.sign({
  //   data: 'marie.dupond@bollore.com|1508509220850',
  //   privateKeys: pKey,
  //   detached: true,
  // });
  // console.log(signed.signature);
}

Main();

