export const name="head_mounted_device";
export const id="dl_854dfb1e4090d730372f";
export const url=new URL("../icons/head_mounted_device.svg?v=36dd5fe2b74fbc81b5f91f6d7c3c8505c8902f5a31b72abe781b4ed394713e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
