// Este codigo es generado automaticamente por Adove Edge Animate

/*Primero se define la funcion que inicializa todfos los elementos que se colocan en el canvas, sus condiciones iniciales y sus propiedades*/
(function(compId){"use strict";var _=null,y=true,n=false,x10='break-word',x6='50',p='px',x3='rgba(0,0,0,0)',e17='${Texto2}',x15='rgba(0,0,0,1.00)',g='image',e16='${_1}',x7='Arial, Helvetica, sans-serif',l='normal',e18='${Texto}',o='opacity',x9='none solid rgb(255, 255, 255)',x='text',x14='375',x13='%',x2='5.0.0.375',x8='400',x1='5.0.0',i='none';var g11='Puerta%20-%20Efecto%20de%20Sonido.mp3',g4='1.jpg';var s12="...",s5="Debo salir de aqui";var im='imagenes/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x1,b:x2,stf:i,cg:i,rI:n,cn:{dom:[{id:'_1',t:g,r:['0%','0%','100%','100%','auto','auto'],o:0,f:[x3,im+g4,'0px','0px']},{id:'Texto2',t:x,r:['18.4%','44%','63.9%','11.8%','auto','auto'],overflow:'visible',o:0,text:s5,align:"center",n:[x7,[x6,p],"rgba(255,255,255,1)",x8,x9,l,x10,""]},{id:'Puerta_-_Efecto_de_Sonido',v:i,t:'audio',tag:'audio',r:['434','308','320px','45px','auto','auto'],sr:[aud+g11],pr:'auto'},{id:'Texto',t:x,r:['8.5%','39.6%','83.8%','26%','auto','auto'],o:1,text:s12,align:"center",n:[x7,[x14,x13],"rgba(255,255,255,1.00)",l,i,"",x10,l]}],style:{'${Stage}':{isStage:true,r:['null','null','100%','100%','auto','auto'],overflow:'hidden',f:[x15]}}},tt:{d:23000,a:y,data:[["eid70",o,17000,1500,"linear",e16,'0.000000','1'],["eid86",o,20000,1500,"linear",e17,'0.000000','1'],["eid87",o,21500,1000,"linear",e17,'1','0'],["eid5",o,0,1000,"easeInQuart",e18,'0','1'],["eid6",o,1000,1000,"easeInQuart",e18,'1','0'],["eid37",o,2000,1500,"easeInQuart",e18,'0.000000','1'],["eid38",o,3500,1500,"easeInQuart",e18,'1','0'],["eid39",o,5000,1500,"easeInQuart",e18,'0.000000','1'],["eid40",o,6500,1500,"easeInQuart",e18,'1','0'],["eid43",o,8000,2500,"easeInQuart",e18,'0','1'],["eid44",o,10500,2500,"easeInQuart",e18,'1','0'],["eid61","tr",10500,function(e,d){this.eMA(e,d);},['play','${Puerta_-_Efecto_de_Sonido}',[]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-50825057");

/* Estan son las funciones que se encargan se cambiar el el texto de los mensajes que aparecen en l apantala cuando halla pasado un determinado tiempo */

(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.$("Texto").html("¿Donde estoy?");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.$("Texto").html("No recuerdo nada");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){sym.$("Texto").html("... Creo que encontre una puerta");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",23000,function(sym,e){window.open("Piso3.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-50825057");