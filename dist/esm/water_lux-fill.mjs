export const name="water_lux-fill";
export const id="dl_d2afe25b0f44bdb9778e";
export const url=new URL("../icons/water_lux-fill.svg?v=cc9a535fcb40df15b64f1065398e3c40b520463cbfedbd963bbc52d6afaffc8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
