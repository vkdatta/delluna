export const name="lucid_3-snowflake";
export const id="dl_e0b61b578b944c8c9876";
export const url=new URL("../icons/lucid_3-snowflake.svg?v=8469a09893c9cf0e9f3ae7e20e3f6ece18faa9710d48ccd8b9b998985d1d5e0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
