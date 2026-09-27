export const name="fire-extinguisher";
export const id="dl_b29b168bd9a1403aa8fc";
export const url=new URL("../icons/fire-extinguisher.svg?v=233ab3e358f19ccac0d9d2ae4f1f87eee34bf7fb4454acbce24412136ae6cf14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
