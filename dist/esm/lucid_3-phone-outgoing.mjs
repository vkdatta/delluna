export const name="lucid_3-phone-outgoing";
export const id="dl_d8502541c20f4129ae13";
export const url=new URL("../icons/lucid_3-phone-outgoing.svg?v=27984b3210fb042154c4708f395579a701dec7d89ef32179e172ee8cc44cc525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
