export const name="magnifying-glass-plus-bold";
export const id="dl_e4ee422d94eb4e128c89";
export const url=new URL("../icons/magnifying-glass-plus-bold.svg?v=053fca30721cb4983573cab4b954386bb0ee356bb30f07e0b1d92dcbfef452fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
