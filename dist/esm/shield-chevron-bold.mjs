export const name="shield-chevron-bold";
export const id="dl_c950548f085e4dbb9feb";
export const url=new URL("../icons/S/shield-chevron-bold.svg?v=0879967719de02a1755734f223e42dace2eed19a1414167e56e655b6e88e32e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
