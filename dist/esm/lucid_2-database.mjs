export const name="lucid_2-database";
export const id="dl_046f4e5d82884571818a";
export const url=new URL("../icons/lucid_2-database.svg?v=8cc3c41551132d835f5c75b2f130bf04bda1188967706950c52857027528f7d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
