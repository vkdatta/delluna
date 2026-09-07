export const name="snowflake";
export const id="dl_8298a5d0772d4100b9ee";
export const url=new URL("../icons/S/snowflake.svg?v=ab90939b684fe05dd182e2a984a8ed9813cbb851e586f8e7a176cf359c3056bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
