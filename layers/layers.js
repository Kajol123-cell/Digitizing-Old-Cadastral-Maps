var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_SatteliteMap_1 = new ol.layer.Tile({
            'title': 'Sattelite Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Cadastral_2 = new ol.format.GeoJSON();
var features_Cadastral_2 = format_Cadastral_2.readFeatures(json_Cadastral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadastral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadastral_2.addFeatures(features_Cadastral_2);
var lyr_Cadastral_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadastral_2, 
                style: style_Cadastral_2,
                popuplayertitle: "Cadastral",
                interactive: true,
                title: '<img src="styles/legend/Cadastral_2.png" /> Cadastral'
            });
var format_AOI_3 = new ol.format.GeoJSON();
var features_AOI_3 = format_AOI_3.readFeatures(json_AOI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOI_3.addFeatures(features_AOI_3);
var lyr_AOI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOI_3, 
                style: style_AOI_3,
                popuplayertitle: "AOI",
                interactive: true,
                title: '<img src="styles/legend/AOI_3.png" /> AOI'
            });
var format_Parcel_No_4 = new ol.format.GeoJSON();
var features_Parcel_No_4 = format_Parcel_No_4.readFeatures(json_Parcel_No_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcel_No_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcel_No_4.addFeatures(features_Parcel_No_4);
var lyr_Parcel_No_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcel_No_4, 
                style: style_Parcel_No_4,
                popuplayertitle: "Parcel_No",
                interactive: true,
                title: '<img src="styles/legend/Parcel_No_4.png" /> Parcel_No'
            });
var format_Location_Name_5 = new ol.format.GeoJSON();
var features_Location_Name_5 = format_Location_Name_5.readFeatures(json_Location_Name_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Location_Name_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_Name_5.addFeatures(features_Location_Name_5);
var lyr_Location_Name_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_Name_5, 
                style: style_Location_Name_5,
                popuplayertitle: "Location_Name",
                interactive: true,
                title: '<img src="styles/legend/Location_Name_5.png" /> Location_Name'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SatteliteMap_1.setVisible(true);lyr_Cadastral_2.setVisible(true);lyr_AOI_3.setVisible(true);lyr_Parcel_No_4.setVisible(true);lyr_Location_Name_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SatteliteMap_1,lyr_Cadastral_2,lyr_AOI_3,lyr_Parcel_No_4,lyr_Location_Name_5];
lyr_Cadastral_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AOI_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Parcel_No_4.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Location_Name_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Cadastral_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AOI_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parcel_No_4.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_Location_Name_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_Cadastral_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AOI_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Parcel_No_4.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_Location_Name_5.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'inline label - visible with data', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_Location_Name_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});