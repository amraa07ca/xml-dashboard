const router = require('express').Router();
const fs = require('fs');
const builder = require('xmlbuilder');
// Load Model
const User = require('../models/users.model');
// GET /xmlgenerator/:userID
router.route('/:userID').get(async (req, res) => {
    try {
        const datetime = new Date();
        const xml = builder.create('Builders', { encoding: 'UTF-8' })
            .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
            .att('DateGenerated', datetime.toISOString())
            .att('xsi:noNamespaceSchemaLocation', 'NHlist-v7_6.xsd')
            .ele('Corporation')
                .ele('CorporateBuilderNumber', 'DRB').up()
                .ele('CorporateState', 'NC').up()
                .ele('CorporateName', 'DRB Group').up()
                .ele('Builder')
                    .ele('BuilderNumber', 'ELEVATEHOMES').up()
                    .ele('BrandName', 'Elevate Homes').up()
                    .ele('BrandLogo_Med', { 'ReferenceType': 'URL' }, 'https://www.elevate-homes.com/images/elevate-homes-logo.svg').up()
                    .ele('BrandLogo_Sm', { 'ReferenceType': 'URL' }, 'https://www.elevate-homes.com/images/elevate-homes-logo.svg').up()
                    .ele('ReportingName', 'Elevate Homes').up()
                    .ele('DefaultLeadsEmail', { 'LeadsPerMessage': 'All' }, 'bbrand@drbgroup.com').up()
                    .ele('BuilderWebsite', 'http://www.elevate-homes.com').up()
                    .ele('Subdivision')
                        .ele('SubdivisionNumber', 'FORGECREEK').up()
                        .ele('SubdivisionName', 'Forge Creek').up()
                        .ele('SalesOffice')
                            .ele('Agent', 'Barry Brand').up()
                            .ele('Address', { 'OutOfCommunity': 0 })
                                .ele('Street1', '44 Warm Wind Drive').up()
                                .ele('City', 'Clayton').up()
                                .ele('State', 'NC').up()
                                .ele('ZIP', 27527).up()
                                .ele('Geocode')
                                    .ele('Latitude', 35.661246).up()
                                    .ele('Longitude', -78.339058).up()
                                .up()
                            .up()
                            .ele('Phone')
                                .ele('AreaCode', 844).up()
                                .ele('Prefix', 543).up()
                                .ele('Suffix', 3455).up()
                            .up()
                            .ele('Email', 'bbrand@drbgroup.com').up()
                        .up()
                        .ele('SubDescription', 'Forge Creek is located in one of the fastest selling master planned communities in the Triangle – Flowers Plantation, an exciting, award-winning neighborhood. Upon visiting, you will find a serene backdrop of approximately 4,000 acres bordered by the Neuse River featuring the historic Dr. Watson Inn, lakes, miles of walking trails, three pools, a state-of-the-art clubhouse, and fitness center along with a spa.').up()
                        .ele('SubImage', { 'SequencePosition': 1, 'Title': 'Forge Creek Image', 'ReferenceType': 'URL', 'IsPreferredSubImage': 1 }, 'https://www.elevate-homes.com/communities/forge-creek/images/slider/slider-1.jpg').up()
                        .ele('SubWebsite', 'https://www.elevate-homes.com/communities/forge-creek/').up()
                        .ele('Plan', { 'Type': 'SingleFamily' })
                            .ele('PlanNumber', 'EHFG01').up()
                            .ele('PlanName', 'Vertuoso').up()
                            .ele('BasePrice', 284990.00).up()
                            .ele('BaseSqft', 1794).up()
                            .ele('Baths', 2).up()
                            .ele('Bedrooms', 2).up()
                            .ele('Garage', 2).up()
                            .ele('Description', "Virtuoso floorplan undecorated field model available now! Save yourself months off of the building process. This home is nicely equipped with a gas range, Bulk storage room (heated and cooled) Owners retreat attached to the Owners suite and much more! Don't wait, it is finished and waiting for you!").up()
                            .ele('PlanImages')
                                .ele('ElevationImage', { 'SequencePosition': 1, 'ReferenceType': 'URL', 'IsPreferredSubImage': 1 }, 'https://www.elevate-homes.com/quick-deliveries/images/0/listingImg.jpg').up()
                            .up()
                            .ele('PlanWebsite', 'https://www.elevate-homes.com/quick-deliveries/?id=0').up()
                            .ele('Spec' , { 'Type': 'SingleFamily' })
                                .ele('SpecNumber', 'EHFG01-SPEC').up()
                                .ele('SpecAddress')
                                    .ele('SpecStreet1', '675 Warm Wind Drive').up()
                                    .ele('SpecCounty', 'Johnston').up()
                                    .ele('SpecCity', 'Clayton').up()
                                    .ele('SpecState', 'NC').up()
                                    .ele('SpecZIP', 27527).up()
                                .up()
                                .ele('SpecPrice', 284990.00).up()
                            .up()
                        .up()
                    .up()
                .up()
            .up()
        .end({ pretty: true });
        
        
        fs.writeFile('xmlfeed.xml', xml, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('updated!');
            }
        });

        // const user = await User.find();
        // res.json(user);
        res.json(datetime)
    } catch (err) {
        res.status(400).json('Error: ' + err)
    }
});

module.exports = router;