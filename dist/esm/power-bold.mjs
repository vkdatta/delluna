export const name="power-bold";
export const id="dl_0c6838c7db9f4581b077";
export const url=new URL("../icons/power-bold.svg?v=2a62c82d34a900f6427d141df61ee93a8fb2d27a1535427aa0569dc197c935b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
