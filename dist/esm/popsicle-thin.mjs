export const name="popsicle-thin";
export const id="dl_a2d0be00aae5408989cb";
export const url=new URL("../icons/popsicle-thin.svg?v=a6331fde4237c6452752daf7f39720abbc4034a5ad7601fd3a5dd6c0b1e157a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
