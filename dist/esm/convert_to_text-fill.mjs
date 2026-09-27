export const name="convert_to_text-fill";
export const id="dl_5f376372d2a0f7f0b2de";
export const url=new URL("../icons/convert_to_text-fill.svg?v=9306d066ebf256080299cc5589c1a7a6e8d95bdadb3f8e45c41ac9e18f6e9a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
