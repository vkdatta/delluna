export const name="battery_android_full-fill";
export const id="dl_e1b8eba755731248d129";
export const url=new URL("../icons/battery_android_full-fill.svg?v=44bbb914c27b87503bc1ba04d0981560c44f1ed1d23a25672d1826e45ad483e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
