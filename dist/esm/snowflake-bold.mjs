export const name="snowflake-bold";
export const id="dl_b5ec74e109825d89f32e";
export const url=new URL("../icons/snowflake-bold.svg?v=b2229107887b4fd89cdbc27fc1019003738f5fbdf30524f4001f540b1c149a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
