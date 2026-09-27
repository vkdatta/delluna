export const name="gender-nonbinary-fill";
export const id="dl_0b653b5417a547d0877a";
export const url=new URL("../icons/gender-nonbinary-fill.svg?v=1a5dea61c26c3430c55a58e4663dbf54009d830a4c375998515e32593ef29545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
