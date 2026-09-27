export const name="arrow-clockwise-bold";
export const id="dl_0b62be8a32604e09b682";
export const url=new URL("../icons/arrow-clockwise-bold.svg?v=5f79a1aaa6e9e57d3af6fbeb93091e2592ee4bf8d626659a0842857223857807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
