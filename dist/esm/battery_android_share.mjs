export const name="battery_android_share";
export const id="dl_9984a76f1b6b66c0972e";
export const url=new URL("../icons/battery_android_share.svg?v=8334248264efec783128f521e8871fcb13ef61732a3e3b57364f350d043e50e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
