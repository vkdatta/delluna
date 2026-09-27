export const name="mobile_text-fill";
export const id="dl_2e44f992be3bb87d89db";
export const url=new URL("../icons/mobile_text-fill.svg?v=80c8db0b5ca0a7c23b65f4a4a6f42239b804839a56af3a2e08b072bc209fde95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
