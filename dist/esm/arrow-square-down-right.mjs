export const name="arrow-square-down-right";
export const id="dl_e2c5efd46fc6454592f6";
export const url=new URL("../icons/arrow-square-down-right.svg?v=7ec3f6d6d5ca5b908e1a9e40a4c6b673e4d490266d3eefb59856bc98dcfd6a6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
