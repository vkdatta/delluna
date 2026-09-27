export const name="flashlight-thin";
export const id="dl_fb8cdbdb01ed4ceb9e15";
export const url=new URL("../icons/flashlight-thin.svg?v=0f89c59539fb7cceb6412a2c964453270ff6103179f3f9165a04cf90f71f52a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
