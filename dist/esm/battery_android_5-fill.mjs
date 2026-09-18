export const name="battery_android_5-fill";
export const id="dl_a112909197984b1da8bd";
export const url=new URL("../icons/battery_android_5-fill.svg?v=20ed512cbc7d76c07baf6466a9a4e2aec7b9bee5ca40bf4f1e74ec7e8cba055f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
