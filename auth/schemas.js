const Joi = require("joi");

const signupSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).required(),
});

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).required(),
  attemptNumber: Joi.number().default(0),
});

module.exports = {
  signupSchema,
  signinSchema,
};
