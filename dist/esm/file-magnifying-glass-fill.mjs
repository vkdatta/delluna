export const name="file-magnifying-glass-fill";
export const id="dl_a61b3776235c411aa9bc";
export const url=new URL("../icons/file-magnifying-glass-fill.svg?v=dc627358cf5a1e759d0071f1451384dd614d41ec99402521d0e939cf6f854e69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
