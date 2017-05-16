// Este codigo es generado automaticamente por Adove Edge Animate

/*Primero se define la funcion que inicializa todfos los elementos que se colocan en el canvas, sus condiciones iniciales y sus propiedades*/
(function(compId){"use strict";var _=null,y=true,n=false,x7='break-word',x1='5.0.0',x4='%',x8='rgba(0,0,0,0)',x10='rgba(0,0,0,1.00)',g='image',x6='Arial, Helvetica, sans-serif',l='normal',x='text',e11='${Texto}',x2='5.0.0.375',o='opacity',x5='375',i='none';var g9='menulogo.png';var s3="FELICIDADES";var im='imagenes/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x1,b:x2,stf:i,cg:i,rI:n,cn:{dom:[{id:'Texto',t:x,r:['8.5%','39.6%','83.8%','26%','auto','auto'],o:1,text:s3,align:"center",n:[x6,[x5,x4],"rgba(255,255,255,1.00)",l,i,"",x7,l]},{id:'menulogo',t:g,r:['34.6%','74.5%','31.6%','19.5%','auto','auto'],cu:'pointer',f:[x8,im+g9,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','100%','100%','auto','auto'],overflow:'hidden',f:[x10]}}},tt:{d:12000,a:y,data:[["eid5",o,0,1000,"easeInQuart",e11,'0','1'],["eid6",o,1000,1000,"easeInQuart",e11,'1','0'],["eid37",o,2000,1500,"easeInQuart",e11,'0.000000','1'],["eid38",o,3500,1500,"easeInQuart",e11,'1','0'],["eid39",o,5000,1500,"easeInQuart",e11,'0.000000','1'],["eid40",o,6500,1500,"easeInQuart",e11,'1','0'],["eid43",o,8000,2500,"easeInQuart",e11,'0','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-50825057");

/* Estan son las funciones que se encargan se cambiar el el texto de los mensajes que aparecen en l apantala cuando halla pasado un determinado tiempo */

(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.$("Texto").html("ERES LIBRE");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.$("Texto").html("Gracias por jugar");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){sym.$("Texto").html("FIN");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("menulogo").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){sym.$("menulogo").show();sym.stop();});
//Edge binding end
                      
/* Esta es la funcion de accion del boton Menu del final */ 

Symbol.bindElementAction(compId,symbolName,"${menulogo}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-50825057");