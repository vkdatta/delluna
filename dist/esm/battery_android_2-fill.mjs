export const name="battery_android_2-fill";
export const id="dl_85ff205418d6deca1e50";
export const url=new URL("../icons/battery_android_2-fill.svg?v=36e327d1e477e9598851ccfab1863526b52d6763b4658757125299f3659d5923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
