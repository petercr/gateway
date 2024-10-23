import { handler as defaultregexMatch } from './default/regexMatch';
import { handler as defaultsentenceCount } from './default/sentenceCount';
import { handler as defaultwordCount } from './default/wordCount';
import { handler as defaultcharacterCount } from './default/characterCount';
import { handler as defaultjsonSchema } from './default/jsonSchema';
import { handler as defaultjsonKeys } from './default/jsonKeys';
import { handler as defaultcontains } from './default/contains';
import { handler as defaultvalidUrls } from './default/validUrls';
import { handler as defaultwebhook } from './default/webhook';
import { handler as defaultlog } from './default/log';
import { handler as defaultcontainsCode } from './default/containsCode';
import { handler as defaultalluppercase } from './default/alluppercase';
import { handler as defaultalllowercase } from './default/alllowercase';
import { handler as defaultendsWith } from './default/endsWith';
import { handler as portkeymoderateContent } from './portkey/moderateContent';
import { handler as portkeylanguage } from './portkey/language';
import { handler as portkeypii } from './portkey/pii';
import { handler as portkeygibberish } from './portkey/gibberish';
import { handler as nsfwCheckernsfwChecker } from './nsfw/nsfwChecker';

export const plugins = {
  default: {
    regexMatch: defaultregexMatch,
    sentenceCount: defaultsentenceCount,
    wordCount: defaultwordCount,
    characterCount: defaultcharacterCount,
    jsonSchema: defaultjsonSchema,
    jsonKeys: defaultjsonKeys,
    contains: defaultcontains,
    validUrls: defaultvalidUrls,
    webhook: defaultwebhook,
    log: defaultlog,
    containsCode: defaultcontainsCode,
    alluppercase: defaultalluppercase,
    alllowercase: defaultalllowercase,
    endsWith: defaultendsWith,
  },
  portkey: {
    moderateContent: portkeymoderateContent,
    language: portkeylanguage,
    pii: portkeypii,
    gibberish: portkeygibberish,
  },
  nsfw: {
    nsfwChecker: nsfwCheckernsfwChecker,
  },
};
