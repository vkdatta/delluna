export const name="battery_android_full-fill";
export const id="dl_7ba2348d66f0f1df5369";
export const url=new URL("../icons/battery_android_full-fill.svg?v=dd3ccaa116756b57548a035e8b220f717efc921267f9dd51a86890e7ebfcac81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
