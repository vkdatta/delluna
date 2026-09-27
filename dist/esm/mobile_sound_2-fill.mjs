export const name="mobile_sound_2-fill";
export const id="dl_572655a6197293f4d008";
export const url=new URL("../icons/mobile_sound_2-fill.svg?v=8f6e80b20aef0527afff94abccc513e3c77da6c2618c6abe5c3a1b14ed9d3e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
