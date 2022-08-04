import * as AWS from 'aws-sdk';

const DetectFaces = (imageData: ArrayBuffer, setDataList: any, setLoading: any) => {

    AWS.config.region = `${process.env.REACT_APP_CREDENTIAL_REGION}`; 
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId:  `${process.env.REACT_APP_CREDENTIAL_IDENTITY}`,
    });
    var rekognition = new AWS.Rekognition();

    var params = {
      Image: {
        Bytes: imageData
      },
      Attributes: [
        'ALL',
      ]
    };
    rekognition.detectFaces(params, function (err, data) {
      if (err) {
        console.log(err)
      }
      else {
        setDataList(data.FaceDetails)
        setLoading(false)
      }
    });
  };

export default DetectFaces;
