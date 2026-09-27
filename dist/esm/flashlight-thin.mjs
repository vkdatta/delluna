export const name="flashlight-thin";
export const id="dl_fb8cdbdb01ed4ceb9e15";
export const url=new URL("../icons/flashlight-thin.svg?v=d2c8f1500fbff7571a7c6eef6bac68842dd854edc8191e38c73f5ef838818d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
