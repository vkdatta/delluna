export const name="line_weight";
export const id="dl_2c96a7cc1b921809faf1";
export const url=new URL("../icons/line_weight.svg?v=8715e9b9d33bd6e1b520fe4b2cfd73d0518a2581b78329900775124128c46b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
