export const name="square-half-fill";
export const id="dl_4ee74f5ae6aa1974d50f";
export const url=new URL("../icons/square-half-fill.svg?v=8e3b538d526f541d434ff1f045428b4c01fc9e6add31520bfd6e61d2e10addb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
