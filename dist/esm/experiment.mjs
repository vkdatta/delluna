export const name="experiment";
export const id="dl_4a3edfe97bdf56554dd1";
export const url=new URL("../icons/experiment.svg?v=64c0a077f78f4082f3783d634abef85e0084d5ad973453f7ed9085bf91ea0894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
