export const name="code-simple";
export const id="dl_b3517280d91a45dcb74a";
export const url=new URL("../icons/code-simple.svg?v=30d0ed89383afac659e3d68eb179443045983be83961babde4ddc21c6030b2e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
