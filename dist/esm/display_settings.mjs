export const name="display_settings";
export const id="dl_7a472321ca440743e821";
export const url=new URL("../icons/display_settings.svg?v=ab845821ed0de830dc8ebbdbc90a632f8bff9e2f283565877ca86c1f55983fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
