// ******************************************************************
var imageCollection = ee.ImageCollection("COPERNICUS/S2"),
geometry = /* color: #9ad6d4 */ee.Geometry.Polygon(
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
[-106.91102541430666, 46.975945942182506]]]);
// ******************************************************************


/* Upload .kml file of Antelope Springs Ranch.  The below feature collection ID
comes from uploading .kml file into Google Fusion Tables. This collection contains the periphery
of Antelope Springs Ranch.  For one reason or another, the periphery of Antelope Springs Ranch
is saved as a "linear ring" shape, which would complicate analysis if that feature type were to be used.
Instead, to avoid complications, a polygon geometry object is manually created by tracing over the
silhouette of the ranch periphery.*/
var antelopeSprings = ee.FeatureCollection('ft:1L0qOimLJCaL2ajOzDCP60Y0rrcH6eNMBc21L4z_7');
print(antelopeSprings, 'Antelope Springs');
Map.addLayer(antelopeSprings, {}, 'Antelope Springs', 0);
Map.setCenter(-106.697307, 46.810309, 10);
var ranchPeriphery = geometry;
print(ranchPeriphery, 'Ranch Periphery');
Map.addLayer(ranchPeriphery, {color: "ee0000"}, 'Ranch Periphery', 0);


var sentinel2Bounded = imageCollection.filterBounds(ranchPeriphery).select(
'B2', 'B3', 'B4', 'B8', 'B11', 'B12', 'QA60');
print(sentinel2Bounded, 'sentinel2Bounded');


var datesList = ee.List(['2013-09-18', '2013-09-19', '2013-09-17', '2013-09-20',
'2013-09-22', '2013-09-21', '2014-10-15', '2014-10-16',
'2014-10-17', '2015-10-16', '2015-10-15', '2015-10-22',
'2015-10-21', '2015-10-12', '2015-10-10', '2015-10-09',
'2016-11-07', '2016-11-08', '2017-09-22', '2017-09-20',
'2017-09-21', '2018-08-01', '2018-08-02']);

print(datesList);

// Define the range of days away from the sample date for which an image will be considered in the remote sensing index
var days = 7;


/***
* Filter collection by times, given max time diference
* (Script amended from https://code.earthengine.google.com/44561805e798d9615508d29a3dafc071
*  ...discovered on the GEE Users Group: "Search Image Collection by a list of Dates")
*/

function filterByTimes(collection, times, maxDiferenceDays) {
var features = times.map(function(t) {
return ee.Feature(null)
.set('system:time_start', ee.Date(t).millis());
});

// Define a max difference filter to compare timestamps.
var filter = ee.Filter.maxDifference({
difference: maxDiferenceDays * 86400000,
leftField: 'system:time_start',
rightField: 'system:time_start'
});

// Define the join.
var join = ee.Join.saveBest({ matchKey: 'match', measureKey: 'difference' });


// Apply the join.
var result = join.apply(collection, features, filter);

return ee.ImageCollection(result);

}

// Apply the function to Landsat images
var sentinel2BoundedDated = filterByTimes(sentinel2Bounded, datesList, days);
print(sentinel2BoundedDated, 'sentinel2BoundedDated');

