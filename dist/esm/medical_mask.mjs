export const name="medical_mask";
export const id="dl_94bb791126048c15124f";
export const url=new URL("../icons/medical_mask.svg?v=f32084990ce6222b675a132a048b9d1b2d3f8cb77790d8dd175be6c063adfddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
