const Application = require('../models/Application');

exports.createApplication = async (req, res) => {
    try {
        const newApp = new Application(req.body);
        await newApp.save();
        res.status(201).json(newApp);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getApplications = async (req, res) => {
    try {
        const apps = await Application.find();
        res.json(apps);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
