export const name="battery_android_frame_full";
export const id="dl_52086af64ee3e0886d08";
export const url=new URL("../icons/battery_android_frame_full.svg?v=df1db57575a58dcf802125c96aea99f5969de508c855383cc5b98eb81fb7645d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
