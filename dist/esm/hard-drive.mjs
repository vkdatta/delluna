export const name="hard-drive";
export const id="dl_ae3f8ae42b14456dacef";
export const url=new URL("../icons/hard-drive.svg?v=d1b9a0aabea792a6cfd7b8827039ddff77049701519ff854719c160b1c9c4f56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
