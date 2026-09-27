export const name="medal-military-bold";
export const id="dl_5cf1d3a93e74491490bf";
export const url=new URL("../icons/medal-military-bold.svg?v=be581c0227d65b425d90ffcc663f0546d0ce945dc02cb9bdf107d9d7b29ab23d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
