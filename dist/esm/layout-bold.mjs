export const name="layout-bold";
export const id="dl_dfa22b1e3d284cb8a174";
export const url=new URL("../icons/layout-bold.svg?v=20b23da590e79c452ae3cb3da713bd3ec0798449cca44c67f90cd4c97065654d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
