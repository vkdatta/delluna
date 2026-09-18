export const name="sql-fill";
export const id="dl_d8ac18c580e4472196b6";
export const url=new URL("../icons/sql-fill.svg?v=8dbecefa4d6e8d186ba688f0278dcbb2883a2d54feba99061adacba20c221690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
