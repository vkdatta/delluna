export const name="bell-z-duotone";
export const id="dl_57c9b58672334fc288a3";
export const url=new URL("../icons/bell-z-duotone.svg?v=d2247b86f87fa4253899a7fa99cc8a3a61875bda019d9f2d238e7d82fd96c192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
