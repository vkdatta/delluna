export const name="bowl-food-light";
export const id="dl_49fed28380834d08b42a";
export const url=new URL("../icons/bowl-food-light.svg?v=6f22f3cfad339f7bdbbc3467cf2df47517eb942cd8e9f9c36d50b77a01696f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
