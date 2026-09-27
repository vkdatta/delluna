export const name="text-columns-bold";
export const id="dl_d8b292d987522ac8cd65";
export const url=new URL("../icons/text-columns-bold.svg?v=afb72703869b915039d92eee1e149384d5d9d368d5c4820b07c03dabae827882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
