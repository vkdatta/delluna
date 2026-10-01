export const name="p2p";
export const id="dl_9403409475ed9c72faf7";
export const url=new URL("../icons/p2p.svg?v=1f3cbb9485cbba98e5161579bd5ab5d048244270739a1a2988fb9c97a5f41f24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
