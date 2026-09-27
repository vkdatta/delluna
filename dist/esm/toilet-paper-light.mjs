export const name="toilet-paper-light";
export const id="dl_a574a836f7b481e707e6";
export const url=new URL("../icons/toilet-paper-light.svg?v=c623ccb022b36d5fbe006741ef9f7c6d8655c2d0460b90294f615a1db2c3dd88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
