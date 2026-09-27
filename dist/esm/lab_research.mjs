export const name="lab_research";
export const id="dl_4a059ed0eca648cd16e0";
export const url=new URL("../icons/lab_research.svg?v=8df9a58bcb0c2c886e0af67a64ab72eac156ee5dee57170fb173fa0e50d7efad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
