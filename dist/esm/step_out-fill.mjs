export const name="step_out-fill";
export const id="dl_c1e80119fb8ceeaf3b1c";
export const url=new URL("../icons/step_out-fill.svg?v=06a5b83c3d72e44a61d59f2016354a8c59c0d6b6166cffe44cbbb053ab3b1d7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
