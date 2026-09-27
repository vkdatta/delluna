export const name="lucid_1-concierge-bell";
export const id="dl_3bf4ba50e86d4e6b839f";
export const url=new URL("../icons/lucid_1-concierge-bell.svg?v=1b5c3743faafdcc6ab028496c8ab6e5cf829be653333ff09e2f33e031805ffa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
