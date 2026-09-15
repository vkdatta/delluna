export const name="brightness_7-fill";
export const id="dl_b6b2c1a8fd6f4f2b9bbe";
export const url=new URL("../icons/B/brightness_7-fill.svg?v=3fcaba25f0bd35e535283b5a5687fd8f97193306fbc25735e8ff947adf606413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
