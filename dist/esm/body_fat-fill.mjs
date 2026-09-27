export const name="body_fat-fill";
export const id="dl_032ce7520605645e5783";
export const url=new URL("../icons/body_fat-fill.svg?v=91722fe20e05fe50828f0dd71aa3716aeb1b7d9641c399807d052ddc95cc913f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
