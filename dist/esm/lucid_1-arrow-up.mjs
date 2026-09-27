export const name="lucid_1-arrow-up";
export const id="dl_e67a3431097645399d61";
export const url=new URL("../icons/lucid_1-arrow-up.svg?v=7e31e6ceda58d428b8cd06e2b9a9ca29048962487f32ef078e1fb0686b466f55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
