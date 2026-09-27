export const name="images-fill";
export const id="dl_b48446d72a964cf7b8f7";
export const url=new URL("../icons/images-fill.svg?v=289a4e01a9adcf76e22f90c5e530ef36287ff72823a2c16ee9c38abd621541e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
