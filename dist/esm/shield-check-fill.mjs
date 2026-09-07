export const name="shield-check-fill";
export const id="dl_cbda5bf6336c40b49832";
export const url=new URL("../icons/S/shield-check-fill.svg?v=16ebdabca38405206b1d36869ae74b0e9f69d34a23bc77d7cbe61dfa34bef1d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
