export const name="number-square-four-light";
export const id="dl_de25a7984a3741819e67";
export const url=new URL("../icons/number-square-four-light.svg?v=f203017642bb4fa661f9751a17df6509138b6715ead4bf22b8f4f679815c03aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
