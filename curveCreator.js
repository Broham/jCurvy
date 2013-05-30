var JSON;
if (!JSON) {
    JSON = {};
}

JSON.stringify = JSON.stringify || function (obj) {  
     var t = typeof (obj);  
     if (t != "object" || obj === null) {  
         // simple data type  
         if (t == "string") obj = '"'+obj+'"';  
         return String(obj);  
     }  
     else {  
         // recurse array or object  
         var n, v, json = [], arr = (obj && obj.constructor == Array);  
         for (n in obj) {  
             v = obj[n]; t = typeof(v);  
             if (t == "string") v = '"'+v+'"';  
             else if (t == "object" && v !== null) v = JSON.stringify(v);  
             json.push((arr ? "" : '"' + n + '":') + String(v));  
         }  
         return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");  
     }  
 };  

        var x0;
        var y0;
        var x1;
        var y1;
        var x2;
        var y2;
        var x3;
        var y3;

        $(function () {
            $('#start').css('top', '0px').css('left', '0px');
            $('#finish').css('top', '0px').css('left', '924px');
            $('#x1y1').css('top', '-231px').css('left', '231px');
            $('#x2y2').css('top', '-231px').css('left', '693px');

            $('.curve').curve();

            $('.draggable').draggable({
                start: function () {

                },
                drag: function () {

                    $('.dot').remove();
                    var curId = $(this).attr('id');
                    var pos = $(this).position();
                    var param;
                    switch (curId) {
                        case 'x1y1':
                            x1 = pos.left;
                            y1 = pos.top;
                            break;

                        case 'x2y2':
                            x2 = pos.left;
                            y2 = pos.top;
                            break;

                        case 'start':
                            x0 = pos.left;
                            y0 = pos.top;
                            break;

                        case 'finish':
                            x3 = pos.left;
                            y3 = pos.top;
                            break;
                    }
                    param = {
                        "x0": x0,
                        "y0": y0,
                        "x1": x1,
                        "y1": y1,
                        "x2": x2,
                        "y2": y2,
                        "x3": x3,
                        "y3": y3
                    };

                    $('.curve').curve(param);
                    $('#sampleCode').text('$(".mySelector").curve(' + JSON.stringify(param) + ')');
                    $('#demoLink').attr('href', 'demo.html?p=' + JSON.stringify(param));
                },
                stop: function () {
                }
            });


        });

