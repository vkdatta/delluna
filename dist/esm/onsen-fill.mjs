export const name="onsen-fill";
export const id="dl_c9881f10cf717dc3884d";
export const url=new URL("../icons/onsen-fill.svg?v=79f2efc5b94e9007cbb3ef6f521a8e0d4746b0318643611709d87382e9de0cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
