export const name="battery_android_4-fill";
export const id="dl_db1731e7026bd2e3a246";
export const url=new URL("../icons/battery_android_4-fill.svg?v=51b00d4fa1508baa55f4e31f526698b05b64577e071405235f4914da1289c2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
