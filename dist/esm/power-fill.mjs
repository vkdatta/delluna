export const name="power-fill";
export const id="dl_1f33a422e6d6461583c4";
export const url=new URL("../icons/power-fill.svg?v=f44ce9817e4064c2b1dcdc2d697cf05e7b57b461ec1bb9f9673d8804a95c05a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
