export const name="rainy_heavy-fill";
export const id="dl_612a7fd3ead81341ce3c";
export const url=new URL("../icons/rainy_heavy-fill.svg?v=d1c16de0015f29a0ae1ce649ff2ac2cd2c4da15425657fb35a4de49dacaea21f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
