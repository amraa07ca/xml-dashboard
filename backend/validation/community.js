const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCommunityInput(data) {
    let errors = {};
    
    // Convert empty fields to an empty string so we can use validator functions
    data.communityName = !isEmpty(data.communityName) ? data.communityName : "";
    data.streetAddress1 = !isEmpty(data.streetAddress1) ? data.streetAddress1 : "";
    data.city = !isEmpty(data.city) ? data.city : "";
    data.state = !isEmpty(data.state) ? data.state : "";
    data.zip = !isEmpty(data.zip) ? data.zip : "";
    data.latitude = !isEmpty(data.latitude) ? data.latitude : "";
    data.longitude = !isEmpty(data.longitude) ? data.longitude : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";

    // Community Name validation
    if (Validator.isEmpty(data.communityName)) {
        errors.communityName = "Community Name field is required";
    }
    // Community Location validation
    if (Validator.isEmpty(data.streetAddress1)) {
        errors.streetAddress1 = "Street Address field is required";
    }
    if (Validator.isEmpty(data.city)) {
        errors.city = "City field is required";
    }
    if (Validator.isEmpty(data.state)) {
        errors.state = "State field is required";
    }
    if (Validator.isEmpty(data.zip)) {
        errors.zip = "Zip Code field is required";
    }
    if (Validator.isEmpty(data.latitude)) {
        errors.latitude = "Latitude field is required";
    }
    if (Validator.isEmpty(data.longitude)) {
        errors.longitude = "Longitude field is required";
    }
    // Community Sales Contact Validation
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Phone Number field is required";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}