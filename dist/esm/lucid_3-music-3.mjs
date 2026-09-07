export const name="lucid_3-music-3";
export const id="dl_4b07387d1e874b00be03";
export const url=new URL("../icons/lucid_3-music-3.svg?v=b67cfbf08d14b88f592ad6d275745799a295e67c012f04dbcad375367f7830cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
