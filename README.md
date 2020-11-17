## What is Serverless
서버리스(Serverless)를 직역하자면, “서버가 없다” 라는 의미. 하지만, 사실상 서버가 없는건 아니며, 특정 작업을 수행하기 위해서 컴퓨터를 혹은 가상머신에 서버를 설정하고, 이를 통하여 처리 하는 것이 아님을 의미함.
- BaaS (Backend as a Service)
  - Firebase
- FaaS (Function as a Service)
  - AWS Lambda 
  - Azure Functions 
  - Google Cloud Functions

### FaaS (Function as a Service)
- FaaS 는 프로젝트를 여러개의 함수 만들고, 클라우드에 함수를 등록 그리고 이 함수들이 실행되는 횟수 나 시간 만큼 비용을 내는 방식.
- 특정 이벤트가 발생 했을 때 실행, 작업을 마치면 종료

1. 장점
   - 인프라를 신경 쓰지 않아도 된다.
   - 확장성이 우수하다. (Auto Scaling)
2. 단점
   - 함수에서 사용 할 수 있는 자원에 제한이 있음 메모리 1500MB, 처리시간 최대 300초
   - Cloud 환경에 의존적이다.
   - 로컬 스토리지가 사용 불가능하다. (S3나 ssm parameter store 이용)
   - 국내 자료가 많이 없다.

## [Install]
[Install]: https://www.serverless.com/framework/docs/providers/aws/guide/installation/

```
npm install -g serverless

serverless

serverless --version
```

## [Create]
[Create]: https://www.serverless.com/framework/docs/providers/aws/cli-reference/create/
초기 프로젝트 생성
```
serverless create --template <template_name> --path <directory_path> --name <service_name>
```

## [Invoke]
[Invoke]: https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke/
1. 로컬에 정의된 함수 호출
```
serverless invoke local --function <function_name>
```

2. AWS에 실제 반영된 람다 호출
```
serverless invoke --stage <stage_name> --function <function_name>

## 실제 호출 람다 주소
arn:aws:lambda:{region}:{account}:function:{service_name}-{stage}-{function_name}
```
## [Deploy]
[Deploy]: https://www.serverless.com/framework/docs/providers/aws/cli-reference/deploy/

```
SLS_DEBUG=* npx sls deploy --stage <<STAGE NAME>> --region <<AWS REGION>> --org_name <<ARC ORG>> --verbose
```

## [AWS Events]
[AWS Events]: serverless.com/framework/docs/providers/aws/events/

### 1. [API GATEWAY]
[API GATEWAY]: https://www.serverless.com/framework/docs/providers/aws/events/apigateway/
#### [HTTP API vs REST API]
[HTTP API vs REST API]: https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/http-api-vs-rest.html
#### [Custom Domains]
[Custom Domains]: https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/how-to-custom-domains.html

* sls offline
```
npm install serverless-offline 

sls offline
```

### 2. Schedule

### 3. SQS

### 4. S3

### [Plugins]
[Plugins]: https://www.serverless.com/framework/docs/providers/aws/guide/plugins/