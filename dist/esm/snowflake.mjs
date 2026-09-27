export const name="snowflake";
export const id="dl_33519a6452a265130918";
export const url=new URL("../icons/snowflake.svg?v=23d88b584f5b2e8dbe954fe01609c01c182718bf53a9d6f77a752fc3cf735055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
