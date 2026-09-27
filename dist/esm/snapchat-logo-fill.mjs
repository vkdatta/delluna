export const name="snapchat-logo-fill";
export const id="dl_26368dbf4cdb92793d2f";
export const url=new URL("../icons/snapchat-logo-fill.svg?v=3f8e4e3e82dccf4f4c1f3056a9c7486e70683e926627103d26410a80f3248609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
