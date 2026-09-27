export const name="warning-diamond";
export const id="dl_14dd5721c6e84418c67e";
export const url=new URL("../icons/warning-diamond.svg?v=0bf321f1e347037389b15d218d6e7190281901ad9397a53c20b143374427508e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
