export const name="lucid_3-music-4";
export const id="dl_cac6e68b47fd47279b41";
export const url=new URL("../icons/lucid_3-music-4.svg?v=e3d42fea932896d1be20be6260425f741d13844bc67a8273c20a6a8ae8d873e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
