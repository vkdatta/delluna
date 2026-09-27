export const name="mobile-fill";
export const id="dl_28298e35bc586bc060b8";
export const url=new URL("../icons/mobile-fill.svg?v=2886dd99c48b50700bf6756666a94bc5bebaa1435736ad6a0fc45ac7d9d74210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
