export const name="battery_android_3-fill";
export const id="dl_123278a35029bf8d223a";
export const url=new URL("../icons/battery_android_3-fill.svg?v=5fbf458775884aa479d8fb058dadfa915344a28f2924aee139ca9ce1237cb5ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
