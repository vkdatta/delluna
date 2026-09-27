export const name="battery_android_0";
export const id="dl_845306410e214fa9a40e";
export const url=new URL("../icons/battery_android_0.svg?v=de947098e1ca3a3e9c02caa71bd68fc61e6b8f2ebbaeb1db6f138a55a9196600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
