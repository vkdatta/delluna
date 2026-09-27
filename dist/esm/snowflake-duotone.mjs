export const name="snowflake-duotone";
export const id="dl_b130283863fdd1e5afaf";
export const url=new URL("../icons/snowflake-duotone.svg?v=0cabae60a388357b2d5c9d5c62f5381aa8c0e7bc81f323372de0c735fb47c6dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
