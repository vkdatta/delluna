export const name="trackpad_input";
export const id="dl_f12bd7dd777ea4ec7192";
export const url=new URL("../icons/trackpad_input.svg?v=3cffd9f664f715e91b0b84efb2bcf24a6f9a160da6f52211768fcaff0d3fc25f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
