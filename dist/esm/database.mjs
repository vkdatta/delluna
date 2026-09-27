export const name="database";
export const id="dl_ad12aa41115042d09e63";
export const url=new URL("../icons/database.svg?v=fae53ee2ed55b59bf800b221f1f26ed8cb64dc4580c9c385ae16481e773805ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
