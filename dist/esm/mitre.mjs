export const name="mitre";
export const id="dl_7784a8eaee62252f1b96";
export const url=new URL("../icons/mitre.svg?v=c67e336911e02c3d5d9b330d082f14af9a9d2bfaee27e3c9fcb0586570b80a9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
