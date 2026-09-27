export const name="jeep-light";
export const id="dl_de5c3ffe30404795b20f";
export const url=new URL("../icons/jeep-light.svg?v=c03ee5d3a7d2f221d604db95b0615028793b7cfbf09091b047d86b21697a5ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
