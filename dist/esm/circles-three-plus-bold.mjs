export const name="circles-three-plus-bold";
export const id="dl_ff93c1899d4046cfb73e";
export const url=new URL("../icons/circles-three-plus-bold.svg?v=dbcfa03cc581a9fef280d3e846a0854a0370d56b7621e91b95f53912634f4ad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
