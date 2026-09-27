export const name="patreon-logo-thin";
export const id="dl_7b2c4219558543e2a358";
export const url=new URL("../icons/patreon-logo-thin.svg?v=3c5e63e7ff6befd68d012c897e9e76862ec39159dfab7a24cd9f87b5d529e25f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
