export const name="fatarrow";
export const id="dl_e63d4d286a3a4d079e9d";
export const url=new URL("../icons/fatarrow.svg?v=88e7d8b1e47db49b9631da36bdd1934cdc336cfe1331ce874ba0570a5eacec7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
