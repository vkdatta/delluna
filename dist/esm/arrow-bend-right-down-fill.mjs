export const name="arrow-bend-right-down-fill";
export const id="dl_15c2b24868f74967bae6";
export const url=new URL("../icons/arrow-bend-right-down-fill.svg?v=670284c932bdbb763a39da763cbc0f3c256571ba0b096bf3c337e8ce381aaf44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
