export const name="funnel-x-duotone";
export const id="dl_dbe48b5d0cfb45d1abfc";
export const url=new URL("../icons/funnel-x-duotone.svg?v=88e99164195fa1fd6851737eedf7fcc546a8226a4145b0f1a478000c8bbe89be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
