export const name="dynamic_form-fill";
export const id="dl_d01be8180203b8efbf70";
export const url=new URL("../icons/dynamic_form-fill.svg?v=6d259a0ed7a5335143e0f663effa3ca0fc9610f885d60e9209d8d9966c54d810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
