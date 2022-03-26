const Joi = require("joi");

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
<<<<<<< HEAD
      const result = Joi.validate(req.body, schema);
=======
      const result = schema.validate(req.body)
>>>>>>> 7e8103cf7e79f9c675be064516ddf9ccf57ca049
      if (result.error) {
        return res.status(400).json(result.error);
      }
      if (!req.value) {
        req.value = {};
      }
      req.value["body"] = result.value;
      next();
    };
  },

  //valiadtion schemas
  schemas: {
    authSchemaSignIn: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
    authSchemaSignUp: Joi.object()
      .keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
        phone: Joi.string().required(),
        college: Joi.string().required(),
        sex: Joi.number().required(),
        referralId: Joi.string(),
        dob: Joi.string(),
      })
      .unknown(false),
    userSchemaPatch: Joi.object().keys({}),
  },
};
