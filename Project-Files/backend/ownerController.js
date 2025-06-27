const Property = require('../schemas/propertyModel');

exports.addProperty = async (req, res) => {
  const { prop_type, prop_address, prop_amt, ownerId, ad_info, prop_images, owner_contact } = req.body;
  const property = new Property({ propertyId: Date.now().toString(), prop_type, prop_address, prop_amt, ownerId, ad_info, prop_images, owner_contact });
  await property.save();
  res.status(201).json({ message: 'Property added successfully' });
};

exports.updateProperty = async (req, res) => {
  const { propertyId, isAvailable } = req.body;
  await Property.findOneAndUpdate({ propertyId }, { isAvailable });
  res.json({ message: 'Property updated successfully' });
};