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
    this.m_fullName = fullName;
    this.m_contactNumber = contactNumber;
    this.m_emailAddress = emailAddress;
  }

  // methods
  toString() {
    return `Full Name      : ${this.m_fullName} \nContact Number : ${this.m_contactNumber} \nEmail Address  : ${this.m_emailAddress}`;
  }

  /**
   * This method returns a JSON object made up of the properties from the Contact class
   *
   * @return {Object}
   */
  toJSON(){
    return {
      "fullName": this.fullName,
      "contactNumber": this.contactNumber,
      "emailAddress": this.emailAddress
    }
  }

  /**
   * This method converts the Contact into a comma separated string
   *
   * @return {string} 
   */
  serialize(){
    return `${this.m_fullName},${this.m_contactNumber},${this.m_emailAddress}`; 
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
  }
}