export const name="thermometer-snowflake";
export const id="dl_e445b60371df43fead84";
export const url=new URL("../icons/thermometer-snowflake.svg?v=6878eac519c89139fc1634b3e535e97dd537b27d7512676132b83c72d85a1924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
