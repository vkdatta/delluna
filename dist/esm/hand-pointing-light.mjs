export const name="hand-pointing-light";
export const id="dl_739685b14bfa410a92a1";
export const url=new URL("../icons/hand-pointing-light.svg?v=de231c1e3728274d8f1f42ccf7fe9f5ab5afe8f0910c97c4c212859510a223c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
