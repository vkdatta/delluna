export const name="magnification_small";
export const id="dl_1c266bc0b58a1b2abafc";
export const url=new URL("../icons/magnification_small.svg?v=313c1ed2066c5a48439235fa0577b6ba8988756345fd4ea696902e69305dcc23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
