export const name="electric_car-fill";
export const id="dl_5f746167dbe6c20b6455";
export const url=new URL("../icons/electric_car-fill.svg?v=ae060d5229ead4fe46956629bf5cce49b3872fbcb5d16aedb18fdf50ca602083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
