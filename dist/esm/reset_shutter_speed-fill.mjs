export const name="reset_shutter_speed-fill";
export const id="dl_d984f60474e97e9f1d89";
export const url=new URL("../icons/reset_shutter_speed-fill.svg?v=a75497ad758e27833d33dd7342cf44c0d9da3a6333ed585aedf94f942763b9f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
