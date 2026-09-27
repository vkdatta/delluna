export const name="lucid_2-database";
export const id="dl_046f4e5d82884571818a";
export const url=new URL("../icons/lucid_2-database.svg?v=b3acc9c1e2db3c526cdb40af989a1f72ddbf01eb09bf8888ea00dbed3c41a84d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
