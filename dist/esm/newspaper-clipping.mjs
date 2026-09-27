export const name="newspaper-clipping";
export const id="dl_979895a0a7dd49eb91a8";
export const url=new URL("../icons/newspaper-clipping.svg?v=72ac9cf452f402695aeaaecf83e3dd61fe1e2e346a2489e40707bedd1726a733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
