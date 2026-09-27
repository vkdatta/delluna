export const name="battery_android_bolt";
export const id="dl_21d958a48fb8995aa039";
export const url=new URL("../icons/battery_android_bolt.svg?v=34d394e1132d4d3b72544c031d79d8017a73a67e3ca088524de6977d1220778b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
