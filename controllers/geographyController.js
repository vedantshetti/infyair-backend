const Geography = require('../models/Geography');

exports.getGeographicData = async (req, res) => {
  try {
    const data = await Geography.getGeographicData();
    res.json({ success: true, data });
  } catch (error) {
    console.error('Error getting geographic data:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.getPostalCodes = async (req, res) => {
  try {
    const postalCodes = await Geography.getPostalCodes();
    res.json({ success: true, data: postalCodes });
  } catch (error) {
    console.error('Error getting postal codes:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.getRegions = async (req, res) => {
  try {
    const regions = await Geography.getRegions();
    res.json({ success: true, data: regions });
  } catch (error) {
    console.error('Error getting regions:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.getStates = async (req, res) => {
  try {
    const states = await Geography.getStates();
    res.json({ success: true, data: states });
  } catch (error) {
    console.error('Error getting states:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.getCities = async (req, res) => {
  try {
    const cities = await Geography.getCities();
    res.json({ success: true, data: cities });
  } catch (error) {
    console.error('Error getting cities:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
