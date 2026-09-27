export const name="table_rows";
export const id="dl_bdadc23bff84c41a5b0b";
export const url=new URL("../icons/table_rows.svg?v=1e7df001ca72f02407918f048751bd90ccab9880e35e8a1a230a6a15670277f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
