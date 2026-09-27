export const name="file-sql-bold";
export const id="dl_b03f94440cc84f12a9e0";
export const url=new URL("../icons/file-sql-bold.svg?v=a1080da25c0f1cb2da2d60c231ee7d85bdd87531546997632ae2d065a07fde2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
