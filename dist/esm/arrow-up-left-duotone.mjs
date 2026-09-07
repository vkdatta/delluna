export const name="arrow-up-left-duotone";
export const id="dl_aefdf8c2cbc440f4b85f";
export const url=new URL("../icons/arrow-up-left-duotone.svg?v=17ac5683a3372b409b82032309f87aaeb55246594e331917de88b21f4498663c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
