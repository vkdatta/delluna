export const name="moon";
export const id="dl_25d241a1733b4a86802c";
export const url=new URL("../icons/moon.svg?v=ec9177d3fc72f3516531f21c0b81d8f4ac7e3d3bc80629029849b333d91a8487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
