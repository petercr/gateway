// plugins/nsfw/nsfw.tests.ts
import { handler as nsfwHandler } from './nsfwChecker';
import { HookEventType, PluginContext, PluginParameters } from '../types';

describe('NSFW Handler', () => {
  it('should return true for NSFW content', async () => {
    const context: PluginContext = {
      response: {
        text: 'They are such a boob at this, they suck ass!',
      },
    };
    const eventType: HookEventType = 'afterRequestHook';
    const parameters: PluginParameters = {};

    const result = await nsfwHandler(context, parameters, eventType);
    expect(result).toBeDefined();
    expect(result.verdict).toBe(true);
    expect(result.error).toBeNull();
    expect(result.data).toBeDefined();
  });

  it('should return false for non-NSFW content', async () => {
    const context: PluginContext = {
      response: {
        text: 'This is a test string with no NSFW content',
      },
    };
    const eventType: HookEventType = 'afterRequestHook';
    const parameters: PluginParameters = {};

    const result = await nsfwHandler(context, parameters, eventType);
    expect(result).toBeDefined();
    expect(result.verdict).toBe(false);
    expect(result.error).toBeNull();
    expect(result.data).toBeDefined();
  });

  it('should return true for non-NSFW content', async () => {
    const context: PluginContext = {
      response: {
        text: 'They are such a boob at this, they suck ass!',
      },
    };
    const eventType: HookEventType = 'afterRequestHook';
    const parameters: PluginParameters = {};

    const result = await nsfwHandler(context, parameters, eventType);
    expect(result).toBeDefined();
    expect(result.verdict).toBe(true);
    expect(result.error).toBeNull();
    expect(result.data).toBeDefined();
  });

  it('should return an error for missing response text', async () => {
    const context: PluginContext = {
      response: {},
    };
    const eventType: HookEventType = 'afterRequestHook';
    const parameters: PluginParameters = {};

    const result = await nsfwHandler(context, parameters, eventType);
    expect(result).toBeDefined();
    expect(result.error).toBeDefined();
    expect(result.verdict).toBeUndefined();
    expect(result.data).toBeNull();
  });
});
