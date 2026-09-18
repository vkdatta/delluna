export const name="desktop_cloud_stack";
export const id="dl_034bfaf1120941e4b513";
export const url=new URL("../icons/desktop_cloud_stack.svg?v=04374539a9919f745a71729c4e8afa2cbc22ccaabd425c896a0c5708e9c625c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
