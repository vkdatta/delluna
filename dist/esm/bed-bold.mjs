export const name="bed-bold";
export const id="dl_d8187d7e7f4b486ca2a7";
export const url=new URL("../icons/bed-bold.svg?v=4888bd946783e8d5a635f5a57dd84649fbdefd31b454d1e53f94c413e9172aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
