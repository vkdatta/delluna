export const name="gesture_select";
export const id="dl_b6e556bcafca4fcdb8d9";
export const url=new URL("../icons/G/gesture_select.svg?v=bcaa6848a437439f3471eef5dbf88f8d68b0f43478aac8d31564b1eccbc5c010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
