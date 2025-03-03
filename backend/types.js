import zod from 'zod';

const bodyValidation = zod.object({
  title: zod.string(),
  details: zod.string()
})

const updateValidation = zod.object({
  _id: zod.string()
})

export {bodyValidation, updateValidation}