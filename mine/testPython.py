import boto3
ddb = boto3.client("dynamodb")

def handler(event, context):
    data = []
    try:
        data = ddb.get_item(
            TableName='test',
            Key={'my':{'S':'my'}}
        )
    except BaseException as e:
        print(e)
        raise(e)
    
    return data
    try:
        data = ddb.put_item(
            TableName='test',
            Item={'att':{'S':'val'},'my':{'S':'my'}}
        )
    except BaseException as e:
        print(e)
        raise(e)
