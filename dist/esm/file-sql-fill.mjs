export const name="file-sql-fill";
export const id="dl_52594280142b4570a774";
export const url=new URL("../icons/file-sql-fill.svg?v=686813eb63436558d66770f296a7a11baa10b6660684396bef65f044f19c31bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
