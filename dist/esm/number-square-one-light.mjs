export const name="number-square-one-light";
export const id="dl_4e34693b138a4615a748";
export const url=new URL("../icons/number-square-one-light.svg?v=6d542a799994ff5e63578e36f698161eb4780fb9c5a82252caf48b449c0b0d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
