export const name="snowflake-bold";
export const id="dl_99835e25fdf04e2d82b9";
export const url=new URL("../icons/S/snowflake-bold.svg?v=b2229107887b4fd89cdbc27fc1019003738f5fbdf30524f4001f540b1c149a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
