import type { Model } from '../types/client';
import { postProcessModelEnum } from './postProcessModelEnum';
import { postProcessModelEnums } from './postProcessModelEnums';
import { postProcessModelImports } from './postProcessModelImports';

/**
 * Post processes the model.
 * This will clean up any double imports or enum values.
 * @param model
 */
export const postProcessModel = (model: Model): Model => ({
    ...model,
    imports: postProcessModelImports(model),
    enums: postProcessModelEnums(model),
    enum: postProcessModelEnum(model),
});
