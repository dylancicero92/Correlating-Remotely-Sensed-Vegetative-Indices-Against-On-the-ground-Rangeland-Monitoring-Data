// ******************************************************************
var image = ee.Image("users/dfc58/Sentinel_Corrected_0"),
image2 = ee.Image("users/dfc58/Sentinel_Corrected_1"),
image3 = ee.Image("users/dfc58/Sentinel_Corrected_10"),
image4 = ee.Image("users/dfc58/Sentinel_Corrected_11"),
image5 = ee.Image("users/dfc58/Sentinel_Corrected_12"),
image6 = ee.Image("users/dfc58/Sentinel_Corrected_13"),
image7 = ee.Image("users/dfc58/Sentinel_Corrected_14"),
image8 = ee.Image("users/dfc58/Sentinel_Corrected_15"),
image9 = ee.Image("users/dfc58/Sentinel_Corrected_16"),
image10 = ee.Image("users/dfc58/Sentinel_Corrected_17"),
image11 = ee.Image("users/dfc58/Sentinel_Corrected_18"),
image12 = ee.Image("users/dfc58/Sentinel_Corrected_19"),
image13 = ee.Image("users/dfc58/Sentinel_Corrected_2"),
image14 = ee.Image("users/dfc58/Sentinel_Corrected_20"),
image15 = ee.Image("users/dfc58/Sentinel_Corrected_21"),
image16 = ee.Image("users/dfc58/Sentinel_Corrected_22"),
image17 = ee.Image("users/dfc58/Sentinel_Corrected_3"),
image18 = ee.Image("users/dfc58/Sentinel_Corrected_4"),
image19 = ee.Image("users/dfc58/Sentinel_Corrected_5"),
image20 = ee.Image("users/dfc58/Sentinel_Corrected_6"),
image21 = ee.Image("users/dfc58/Sentinel_Corrected_7"),
image22 = ee.Image("users/dfc58/Sentinel_Corrected_8"),
image23 = ee.Image("users/dfc58/Sentinel_Corrected_9"),
geometry2 = /* color: #9ad6d4 */ee.Geometry.Polygon(
                                                    [[[-106.9105104301758, 46.90304426848748],
                                                      [-106.84836901171877, 46.90304426848748],
                                                      [-106.84768236621096, 46.888498948761494],
                                                      [-106.84047258837893, 46.888498948761494],
                                                      [-106.83755434497073, 46.88591791543198],
                                                      [-106.83686769946291, 46.88169413846015],
                                                      [-106.82725466235354, 46.88169413846015],
                                                      [-106.82725466235354, 46.86667357149678],
                                                      [-106.81626833422854, 46.86667357149678],
                                                      [-106.81558168872073, 46.859631233473166],
                                                      [-106.80596865161135, 46.859631233473166],
                                                      [-106.80596865161135, 46.85211838801132],
                                                      [-106.78399599536135, 46.85305755117574],
                                                      [-106.78330934985354, 46.88873358199682],
                                                      [-106.75241030200198, 46.88873358199682],
                                                      [-106.75241030200198, 46.872776183874635],
                                                      [-106.73043764575198, 46.87324558685623],
                                                      [-106.73043764575198, 46.859631233473166],
                                                      [-106.72151125415041, 46.85916171142541],
                                                      [-106.72151125415041, 46.84601342711953],
                                                      [-106.74211061938479, 46.84601342711953],
                                                      [-106.7427972648926, 46.831452643200755],
                                                      [-106.77163637622073, 46.83098287479758],
                                                      [-106.77094973071291, 46.80231923748752],
                                                      [-106.75103701098635, 46.80231923748752],
                                                      [-106.74966371997073, 46.773170047092144],
                                                      [-106.70709169848635, 46.744005071011074],
                                                      [-106.68580568774416, 46.744475599106934],
                                                      [-106.68649233325198, 46.75858953232443],
                                                      [-106.66657961352541, 46.75858953232443],
                                                      [-106.66520632250979, 46.744005071011074],
                                                      [-106.64460695727541, 46.744475599106934],
                                                      [-106.64460695727541, 46.77364032057229],
                                                      [-106.66451967700198, 46.774110589945856],
                                                      [-106.66451967700198, 46.802789256368],
                                                      [-106.68580568774416, 46.802789256368],
                                                      [-106.68580568774416, 46.8305131022883],
                                                      [-106.67825258715823, 46.8305131022883],
                                                      [-106.67825258715823, 46.90327883808828],
                                                      [-106.69816530688479, 46.904217106228124],
                                                      [-106.69816530688479, 46.93235751459442],
                                                      [-106.71945131762698, 46.93282639619224],
                                                      [-106.71876467211916, 46.946890935277565],
                                                      [-106.80390871508791, 46.94735968961951],
                                                      [-106.80390871508791, 46.96142041109468],
                                                      [-106.8471673820801, 46.96188903818517],
                                                      [-106.8471673820801, 46.97547743823439],
                                                      [-106.91102541430666, 46.975945942182506]]]),
T101 = /* color: #00ffff */ee.Geometry.Point([-106.697529, 46.758205]),
T202 = /* color: #98ff00 */ee.Geometry.Point([-106.697441, 46.810402]),
T103 = /* color: #0b4a8b */ee.Geometry.Point([-106.74743, 46.826524]),
T104 = /* color: #ffc82d */ee.Geometry.Point([-106.697597, 46.844215]),
T105 = /* color: #00ffff */ee.Geometry.Point([-106.712597, 46.882109]),
T106 = /* color: #bf04c2 */ee.Geometry.Point([-106.770491, 46.913874]),
T107 = /* color: #ff0000 */ee.Geometry.Point([-106.721706, 46.919726]),
T208 = /* color: #00ff00 */ee.Geometry.Point([-106.806999, 46.883944]),
T109 = /* color: #0000ff */ee.Geometry.Point([-106.909115, 46.921327]),
T110 = /* color: #999900 */ee.Geometry.Point([-106.824015, 46.950465]),
T111 = /* color: #009999 */ee.Geometry.Point([-106.874966, 46.967277]),
T112 = /* color: #ff00ff */ee.Geometry.Point([-106.901209, 46.964578]);
// ******************************************************************

// Create feature collection from imported geometries
var samplePoints = [ee.Feature(T101, {name: 'T101'}), ee.Feature(T202, {name: 'T202'}), ee.Feature(T103, {name: 'T103'}),
                    ee.Feature(T104, {name: 'T104'}), ee.Feature(T105, {name: 'T105'}), ee.Feature(T106, {name: 'T106'}),
                    ee.Feature(T107, {name: 'T107'}), ee.Feature(T208, {name: 'T208'}), ee.Feature(T109, {name: 'T109'}),
                    ee.Feature(T110, {name: 'T110'}), ee.Feature(T111, {name: 'T111'}), ee.Feature(T112, {name: 'T112'})];

// Create function to build ring for each sample point
var createRing = function(feature){
    var buffered10 = feature.buffer(10);
    var buffered30 = feature.buffer(30);
    var ring = buffered30.difference(buffered10);
    return ring;
};

// Map function across all points in feature collection
var sampleRings = ee.FeatureCollection(samplePoints.map(createRing));
print(sampleRings, 'sampleRings');
Map.addLayer(sampleRings, {}, 'sampleRings');

/* Upload .kml file of Antelope Springs Ranch.  ID inputted into feature collection
 constructor comes from uploading .kml file into Google Fusion Tables. */
var antelopeSprings = ee.FeatureCollection('ft:1L0qOimLJCaL2ajOzDCP60Y0rrcH6eNMBc21L4z_7');
print(antelopeSprings, 'Antelope Springs');
Map.addLayer(antelopeSprings, {}, 'Antelope Springs', 0);
Map.setCenter(-106.697307, 46.810309, 10);
// Extract the border of the ranch from the Antelope Springs feature collection.
var featuresList = antelopeSprings.toList(antelopeSprings.size());
print(ee.Feature(featuresList.get(0)).geometry().convexHull());
var ranchPeriphery = geometry2;
print(ranchPeriphery, 'Ranch Periphery');
Map.addLayer(ranchPeriphery, {color: "ee0000"}, 'Ranch Periphery', 0);


// Store Sentinel images in collection
var SentinelCollection = ee.ImageCollection([image,image2,image3,image4,image5,image6,
                                             image7,image8,image9,image10,image11,image12,
                                             image13,image14,image15,image16,image17,image18,
                                             image19,image20,image21,image22,image23]);

print(SentinelCollection,'SentinelCollection');

var sorted = SentinelCollection.sort('system:time_start');
print(sorted, 'sorted');

// Create dictionary of sample point dates for Antelope Springs Ranch
var datesList = ee.List(['2013-09-18', '2013-09-19', '2013-09-17', '2013-09-20',
                         '2013-09-22', '2013-09-21', '2014-10-15', '2014-10-16',
                         '2014-10-17', '2015-10-16', '2015-10-15', '2015-10-22',
                         '2015-10-21', '2015-10-12', '2015-10-10', '2015-10-09',
                         '2016-11-07', '2016-11-08', '2017-09-22', '2017-09-20',
                         '2017-09-21', '2018-08-01', '2018-08-02']);

// Define the range of days away from the sample date for which an image will be considered in the remote sensing index
var days = 7;


//Clip tiles to Antelope Springs Ranch
// 1) Develop function to clip
var clip = function(image) {
    return image.clip(ranchPeriphery);
};
// 2) Clip images
var Sentinel2Clipped = SentinelCollection.map(clip);
print(Sentinel2Clipped,"Sentinel2Clipped");
var list = Sentinel2Clipped.toList(Sentinel2Clipped.size());
var trialImage = ee.Image(list.get(0));
print(trialImage.select('B11'));
Map.addLayer(ee.Image(list.get(0)), {}, 'trialImage');
Map.addLayer(ee.Image(list.get(1)));


// Cloud mask the collection.

// Function to mask clouds using the Sentinel-2 QA band.
// (taken from GEE Scripts Cloud Masking: Sentinel)
function maskS2clouds(image) {
    var qa = image.select('QA60');
    
    // Bits 10 and 11 are clouds and cirrus, respectively.
    var cloudBitMask = 1 << 10;
    var cirrusBitMask = 1 << 11;
    
    // Both flags should be set to zero, indicating clear conditions.
    var mask = qa.bitwiseAnd(cloudBitMask).eq(0).and(
                                                     qa.bitwiseAnd(cirrusBitMask).eq(0));
    
    // Return the masked and scaled data, without the QA bands.
    return image.updateMask(mask).divide(10000)
    .select("B.*")
    .copyProperties(image, ["system:time_start"]);
}
// Map function over the collection
var Sentinel2ClippedMasked = Sentinel2Clipped.map(maskS2clouds);


/* Calculate the Normalized Difference Senescent Vegetation Index across feature collection:
 (TM5-TM3)/(TM5+TM3) (Qi et al. 2002) --> (SWIR1600-R660)/(SWIR1600+R660) -->
 for Sentinel: (B11-B4)/(B11+B4) --> (SWIR1610-R665)/(SWIR1610+R665)*/

// 1) Develop function to calculate NDSVI from a sentinel-2 image
var NDSVI = function(image) {
    var image1 = ee.Image(((image.select('B11').subtract(image.select('B4')))).divide
                          ((image.select('B11').add(image.select('B4')))), "NDSVI");
    var renamed = image1.select(['B11'],['NDSVI']);
    return image.addBands(renamed);
};

// 2) Map function over image collection
var S2CollectionNDSVI = ee.ImageCollection(Sentinel2ClippedMasked.map(NDSVI));
print(S2CollectionNDSVI, 'S2CollectionNDSVI');
Map.addLayer(S2CollectionNDSVI, {}, 'S2CollectionNDSVI', 0);


// Calculate the Soil Adjusted Total Vegetation Index
// SATVI = [[(NIR-R)/(NIR+R+L)]*(1+L)]-(SWIR2200/2)... L =0.5 (typical standard)

// 1) Develop function
var SATVI = function(image) {
    var image1 = image.expression(
                                  '(((SWIR - R) / (SWIR + R + L)) * (1 + L)) - (SWIR2 / 2)', {
                                  'SWIR': image.select('B11'),
                                  'R': image.select('B4'),
                                  'L': 0.5,
                                  'SWIR2': image.select('B12')
                                  });
    var renamed = image1.select(['B11'],['SATVI']);
    return image.addBands(renamed);
};

// 2) Map function over image collection
var S2CollectionNDSVI_SATVI = ee.ImageCollection(S2CollectionNDSVI.map(SATVI));


// Calculate the Normalized Difference Vegetation index

// 1.) Develop function to calculate NDVI from a landsat 8 image
var NDVI = function(image) {
    var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
    return image.addBands(ndvi);
};

// 2.) Map function over image collection
var S2CollectionNDSVI_SATVI_NDVI = S2CollectionNDSVI_SATVI.map(NDVI);
print(S2CollectionNDSVI_SATVI_NDVI, 'S2CollectionNDSVI_SATVI_NDVI');


// Calculate the Soil Adjusted Vegetation Index.
// SAVI = [(NIR-RED)/(NIR+RED+L)]*(1+L) ... L = 0.5 (typical standard)

// 1) Develop function
var SAVI = function(image) {
    var image1 = ee.Image(((image.select('B8').subtract(image.select('B4'))).divide
                           (image.select('B8').add(image.select('B4').add(0.5)))).multiply(1+0.5), 'SAVI');
    var renamed = image1.select(['B8'], ['SAVI']);
    return image.addBands(renamed);
};

// 2) Map function over image collection
var S2CollectionNDSVI_SATVI_NDVI_SAVI = ee.ImageCollection(S2CollectionNDSVI_SATVI_NDVI.map(SAVI));
print(S2CollectionNDSVI_SATVI_NDVI_SAVI, 'S2CollectionNDSVI_SATVI_NDVI_SAVI');

// Calculate the Modified Soil Adjusted Vegetation Index2
// MSAVI2 = 0.5 * [(2NIR +1) - SQRT((2NIR+1)^2-8(NIR-R))]

// 1) Develop function
var MSAVI2 = function(image) {
    var image1 = ee.Image((((((image.select('B8')).multiply(2)).add(1)).subtract
                            ((((((image.select('B8')).multiply(2)).add(1)).pow(2)).subtract
                              (((image.select('B8')).subtract(image.select('B4'))).multiply(8))).sqrt())).multiply(0.5)), 'MSAVI2');
    var renamed = image1.select(['B8'], ['MSAVI2']);
    return image.addBands(renamed);
};
// 2) Map function over image collection
var S2CollectionNDSVI_SATVI_NDVI_SAVI_MSAVI2 = ee.ImageCollection(S2CollectionNDSVI_SATVI_NDVI_SAVI.map(MSAVI2));
print(S2CollectionNDSVI_SATVI_NDVI_SAVI_MSAVI2,'S2CollectionNDSVI_SATVI_NDVI_SAVI_MSAVI2');



//Extract index bands from image collection to be exported

// 1.) Create function
var indexBandsOnly = function(image) {
    var image1 = image.select(['NDSVI','SATVI','NDVI','SAVI','MSAVI2']);
    return image1;
};

// 2.) Map over image collection
var indexBandsCollection = S2CollectionNDSVI_SATVI_NDVI_SAVI_MSAVI2.map(indexBandsOnly);
print(indexBandsCollection, 'indexBandsCollection');



// Mosaic images in collection to form a single image for each sample date.

var mosaicByDR = function(date) {
    // 1.) Create list of date ranges based off of list of dates .
    // # recall that the "datesList" and "days" variables have been defined earlier in script
    var rangeMax = ee.Date(date).advance(days, 'day');
    var rangeMin = ee.Date(date).advance(-days, 'day');
    var range = ee.DateRange(rangeMin,rangeMax);
    
    // 2.) For a given date range in a list of date ranges:
    //          If an image in collection falls within a daterange:
    //              Add it to a new image collection
    
    var theFilter = ee.Filter.dateRangeContains(null, null, 'system:time_start', range);
    var newCollection = indexBandsCollection.filter(theFilter);
    
    // 3.) Create function to set new property for given image in the collection equal
    //     to the deviation from the date on which collection is centered.
    //     This will be the property by which images in a given collection will be sorted
    //     to ensure proper mosaicking.
    var newPropertyToSort = function(image){
        return image.set({'deviation_from_date': ee.Number(image.get('system:time_start')- date)});
    };
    // Map function over image collection
    var collectionWithDeviation = newCollection.map(newPropertyToSort);
    
    // Sort image collection on the basis of deviation property
    var sortedCollection = ee.ImageCollection(collectionWithDeviation.sort('deviation_from_date', false));
    
    // Mosaic images in collection
    // If the image closest to the sample date in a given collection contains holes
    // due to masking of clouds, poor pixel quality, etc, the second closest image to the sample
    // date will fill in those pixels.  (If the second closest image contains holes, the third
    // closest image will fill holes, up to the max range specified in the script above).
    // From GEE API: ...
    // "The mosaic method composites overlapping images according to their order in the collection
    //  -last on top. To control the source of pixels in a mosaic, use image masks"
    var mosaicked = sortedCollection.mosaic();
    
    return mosaicked;
};

// Map function over list of dates.  Output will be an image collection of mosaicked images.
var listIndexCollections = ee.ImageCollection(datesList.map(mosaicByDR));
// Remove images in collection for which no bands were returned (no images within sampling date)
var list = (listIndexCollections.toList(listIndexCollections.size())).slice(13);
var listIndexCollections = ee.ImageCollection(list);
print(listIndexCollections, 'listIndexCollections');

// Visualize all mosaics
Map.addLayer(listIndexCollections.first(), {}, "MosaickedImage0");
Map.addLayer(ee.Image(listIndexCollections.toList(listIndexCollections.size()).get(1)), {}, "MosaickedImage1", 0);
Map.addLayer(ee.Image(listIndexCollections.toList(listIndexCollections.size()).get(2)), {}, "MosaickedImage2", 0);
Map.addLayer(ee.Image(listIndexCollections.toList(listIndexCollections.size()).get(3)), {}, "MosaickedImage3", 0);
Map.addLayer(ee.Image(listIndexCollections.toList(listIndexCollections.size()).get(4)), {}, "MosaickedImage4", 0);
Map.addLayer(ee.Image(listIndexCollections.toList(listIndexCollections.size()).get(5)), {}, "MosaickedImage5", 0);
Map.addLayer(ee.Image(listIndexCollections.toList(listIndexCollections.size()).get(6)), {}, "MosaickedImage6", 0);
Map.addLayer(ee.Image(listIndexCollections.toList(listIndexCollections.size()).get(7)), {}, "MosaickedImage7", 0);
Map.addLayer(ee.Image(listIndexCollections.toList(listIndexCollections.size()).get(8)), {}, "MosaickedImage8", 0);
Map.addLayer(ee.Image(listIndexCollections.toList(listIndexCollections.size()).get(9)), {}, "MosaickedImage9", 0);
Map.addLayer(sampleRings, {}, 'sampleRings');


// Extract mean index values per sample ring

// 1.) Develop function
var exportIndicesRing = function(image){
    var soilClassMean = image.reduceRegions({
                                            reducer: ee.Reducer.mean(),
                                            collection: sampleRings,
                                            scale:10});
    return soilClassMean; // soilClassMean is a feature collection, populated with average values for
    // all indices of the image
};

// 2.) Map function over images in indexBandsCollection. The output is a collection of feature collections.
var listFeatureCollectionsRing = listIndexCollections.map(exportIndicesRing);
print(listFeatureCollectionsRing, 'listFeatureCollectionsRing');


// Export collection

// 1.) Flatten collection of feature collections to create a new one-dimensional feature collection

var allImageAvgIndicesRing = listFeatureCollectionsRing.flatten();
print (allImageAvgIndicesRing, 'allImageAvgIndicesRing');

// 2.) Export flattened collection

function centroid_get(feature){
    return feature.centroid();
}

Export.table.toDrive({
                     collection: allImageAvgIndicesRing.map(centroid_get),
                     description: 'SentinelDataByRings',
                     fileFormat: 'CSV',
                     });


