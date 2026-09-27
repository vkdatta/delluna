export const name="dishwasher_gen";
export const id="dl_2d9723ed0973ba175a13";
export const url=new URL("../icons/dishwasher_gen.svg?v=81e322a139752af297376aa0c5651b9e22c388fbcd2475b5ca39dc577535bcf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
