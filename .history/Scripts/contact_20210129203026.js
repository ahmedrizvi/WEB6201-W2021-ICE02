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

  toJSON(){
    return {
      
    }
  }

  serialize(){

  }

  deserialize(){

  }
}