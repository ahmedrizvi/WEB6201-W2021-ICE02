"use strict";

// Contact class
class Contact {
  // getters and setters
  get FullName() {
    return this.m_fullName;
  }
  set FullName(value) {
    this.m_fullName = value;
  }
  get ContactNumber() {
    return this.ContactNumber;
  }
  set ContactNumber(value) {
    this.m_contactNumber = value;
  }
  get EmailAddress() {
    return this.m_emailAddress;
  }
  set EmailAddress(value) {
    this.m_emailAddress = value;
  }

  // constructor

  /**
   * @param {string} fullName 
   * @param {string} contactNumber 
   * @param {string} emailAddress 
   */
  constructor(fullName = "", contactNumber = "", emailAddress = "") 
  {
    this.FullName = fullName;
    this.ContactNumber = contactNumber;
    this.EmailAddress = emailAddress;
  }

  // methods

  /**
   * This method overrides the built-in toString method for the Contact class
   * 
   * @returns {string}
   */
  toString() {
    return `Full Name      : ${this.FullName} \nContact Number : ${this.ContactNumber} \nEmail Address  : ${this.EmailAddress}`;
  }

  /**
   * This method returns a JSON object made up of the properties from the Contact class
   *
   * @return {Object}
   */
  toJSON(){
    return {
      "fullName": this.FullName,
      "contactNumber": this.ContactNumber,
      "emailAddress": this.EmailAddress
    }
  }

  /**
   * This method converts the Contact into a comma separated string
   *
   * @return {string} 
   */
  serialize(){
    if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== ""){

    }

    return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`; 
  }

  /**
   * This method takes a comma-separated data string and assigns the values to the 
   * Contact class properties.
   * 
   * @param {string} data 
   * @returns {void}
   */
  deserialize(data){
    let propertyArray = data.split(",");
    this.FullName = propertyArray[0];
    this.ContactNumber = propertyArray[1];
    this.EmailAddress = propertyArray[2];
  }
}