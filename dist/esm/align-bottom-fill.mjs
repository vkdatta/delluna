export const name="align-bottom-fill";
export const id="dl_fbd75476682f4dd18d30";
export const url=new URL("../icons/align-bottom-fill.svg?v=c8cf4505915b5f65b94203a190753e71d8d2ee8f204630ac1e23472ddc50f624",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
