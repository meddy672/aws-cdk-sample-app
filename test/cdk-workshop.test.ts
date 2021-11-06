import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as CdkWorkshop from '../lib/cdk-workshop-stack';

test('Hello Lambda Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::Lambda::Function"));
});
