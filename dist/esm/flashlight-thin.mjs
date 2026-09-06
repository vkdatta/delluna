export const name="flashlight-thin";
export const id="dl_fb8cdbdb01ed4ceb9e15";
export const url=new URL("../icons/flashlight-thin.svg?v=eb16ea485be219637d2f34f00127829c5d8a440b683dd074e661ac3d3f527d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
