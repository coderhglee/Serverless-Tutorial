// eslint-disable-next-line import/prefer-default-export
export const hello = (event, context, callback) => {
  // console.log(event)
  const s3Record = event.Records[0]
  console.log(s3Record.s3.object.key)
  const p = new Promise(resolve => {
    resolve('success');
  });
  p.then(() =>
    callback(null, {
      message: 'Go Serverless Webpack (Ecma Script) v1.0! First module!',
      event,
    })
  ).catch(e => callback(e));
};
