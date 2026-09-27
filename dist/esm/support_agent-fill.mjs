export const name="support_agent-fill";
export const id="dl_aae46fe01290d698d321";
export const url=new URL("../icons/support_agent-fill.svg?v=b3a8e66d9e10204955f9a0ba0abd83d4f6dea82663dc3db6a7d2f0b7d5e27661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
