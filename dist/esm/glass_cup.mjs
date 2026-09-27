export const name="glass_cup";
export const id="dl_19876df57b81c4ba0460";
export const url=new URL("../icons/glass_cup.svg?v=f234e46fd83f86641449e76e9d5764a927fff34d1a5444ac4cc93831538ebb40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
