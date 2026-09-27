export const name="switch_camera-fill";
export const id="dl_84770fe623577abc7a75";
export const url=new URL("../icons/switch_camera-fill.svg?v=afa59f432e5183c8c0a35112f127dd224518ff6ccb8ba0e7415215037c6fdaed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
