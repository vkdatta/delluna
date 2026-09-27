export const name="crosshair-duotone";
export const id="dl_c3887d538a824b7aadfc";
export const url=new URL("../icons/crosshair-duotone.svg?v=9c0b18fdec59fbb27871824951e728f1fbbd942e59ab20dc6a0bf1516c2a0513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
