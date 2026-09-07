export const name="text-h-four-duotone";
export const id="dl_36f62b4ff2944cb5a494";
export const url=new URL("../icons/T/text-h-four-duotone.svg?v=27a5edab113eebc3438a2c09a53cfa218265ae93579e183514df38e2e98329a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
