import {
  HookEventType,
  PluginContext,
  PluginHandler,
  PluginParameters,
} from '../types';
import { getText } from '../utils';
import * as wash from 'washyourmouthoutwithsoap';

export const handler: PluginHandler = async (
  context: PluginContext,
  parameters: PluginParameters,
  eventType: HookEventType
) => {
  const responseText = getText(context.response, eventType);
  const containsNsfw = wash.check('en', responseText);

  return {
    verdict: containsNsfw,
    data: null,
    error: null,
  };
};
