export const name="fire_check";
export const id="dl_0afa22ba56c76540e5f0";
export const url=new URL("../icons/fire_check.svg?v=1c8c2cddd19590cb738eef9c11e31ee966065a003c62f7e45d97d433f835f72f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
