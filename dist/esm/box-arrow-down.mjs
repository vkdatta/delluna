export const name="box-arrow-down";
export const id="dl_b17d2dd5f4114a618cb9";
export const url=new URL("../icons/box-arrow-down.svg?v=8c493da857cff6eba67182106533cfc9266003aa7962a8691db1c01dc7376322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
