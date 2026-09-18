export const name="antigravity";
export const id="dl_6008cc98ebb544a5a890";
export const url=new URL("../icons/antigravity.svg?v=8680b8914b732e04d2dd81b8df7072e581114718217cb5a7bf28eb8d1f7058dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
