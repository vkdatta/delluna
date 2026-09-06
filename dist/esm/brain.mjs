export const name="brain";
export const id="dl_159cb819888b4d178699";
export const url=new URL("../icons/brain.svg?v=9fdd189bc61e6b5e437c91bd6819c7a0bd1e598d0a780ae097b4db2e0de13a43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
