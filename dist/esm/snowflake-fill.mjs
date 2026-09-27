export const name="snowflake-fill";
export const id="dl_67d53d4bdd239297f5a1";
export const url=new URL("../icons/snowflake-fill.svg?v=b29b1360c72b72a77e97f7676377af3399b5786e7d08884b4f0802fa0a49fd93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
