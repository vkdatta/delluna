export const name="lucid_2-flame-kindling";
export const id="dl_ea90aefef1ea4702bb6f";
export const url=new URL("../icons/lucid_2-flame-kindling.svg?v=2bdb825691f33c7328036344060cb1369045655e25606d615a619b587282fd48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
