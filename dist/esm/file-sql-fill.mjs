export const name="file-sql-fill";
export const id="dl_52594280142b4570a774";
export const url=new URL("../icons/file-sql-fill.svg?v=fec97b1ea022a01e1df9c050b39e2ce7ee58f4558cda0203fb0ac96a8e8f815b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
