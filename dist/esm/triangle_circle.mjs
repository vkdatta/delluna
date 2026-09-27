export const name="triangle_circle";
export const id="dl_5e137591b224d4a0f1f0";
export const url=new URL("../icons/triangle_circle.svg?v=720269892ec8fa75a95fbeb2494d9e5cbc7eb71815dd4fcf6a139f191a00d5f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
