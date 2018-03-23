const path = require("path");  
  
//���룺json-serverģ��  
const jsonserver = require("json-server");  
//��jsonserver�����������  
const jserver = jsonserver.create();  
//����·��  
const jrouter = jsonserver.router(path.join(__dirname,"db.json"));  
//�����м��  
const middlewares = jsonserver.defaults();  
  
//nodejs��˼·��ÿ������������ǣ�����ִ��middlewares�м��  
jserver.use(middlewares);  
//·�ɣ�����������Ҷ�Ӧ�����ݣ��磺books����readers  
jserver.use(jrouter);  
//����������  
jserver.listen(8081,()=>{  
    console.log("json-server running in 8081");  
});  
