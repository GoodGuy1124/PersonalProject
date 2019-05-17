import {Ajax} from './Ajax'
// import {RSAKeyPair,encryptedString} from './RSA'
// import {setMaxDigits} from './RSA/BigInt'
// import { hex_md5 as md5} from './md5/md5'
var send =function(method,data,obj_cb)
{
  console.log(method);
    Ajax.post(method,data).then((r)=>
    {
        let method1=method.split("/")[method.split("/").length-1];
        if(r.data.status) {
                obj_cb[method1 +'_cb'](obj_cb.$store.state,obj_cb.$store.commit,r.data);
           
        }
        else{ 
             if(obj_cb[method1 +'_err']) obj_cb[method1+'_err'](obj_cb.$store.state,obj_cb.$store.commit,r.data);
          
            }
    });
}
var get =function(method,data,obj_cb)
{
    Ajax.get(method,data).then((r)=>
    {
        console.log(r);
        let method1=method.split("/")[method.split("/").length-1];
        console.log(method1);
        if(r.data.status) {
                obj_cb[method1 +'_cb'](obj_cb.$store.state,obj_cb.$store.commit,r.data);
        }
        else{ 
             if(obj_cb[method1 +'_err']) obj_cb[method1+'_err'](obj_cb.$store.state,obj_cb.$store.commit,r.data);
          
            }
    });
}

// var RSA_encrypt=function(RsaXMLPublicKey,str)
// {
//     setMaxDigits(131);
//     let pair = RsaXMLPublicKey.split(",");
//     let key = new RSAKeyPair(pair[0], "", pair[1]);
//     return encryptedString(key, str);
// }

export default
{
    // md5,
    send,
    get,
  
}