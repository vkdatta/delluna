export const name="lucid_2-ham";
export const id="dl_e3275304774f45cb8093";
export const url=new URL("../icons/lucid_2-ham.svg?v=d93c83c8ee82a290feef4df18e8d1bef7d2951306206cd3151e6360d8ce8aebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
