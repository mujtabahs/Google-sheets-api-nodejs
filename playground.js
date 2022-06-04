const express = require("express");
const { google } = require("googleapis");

const path = require('path')
const publicDirectory = path.join(__dirname,'\public')
console.log(publicDirectory)