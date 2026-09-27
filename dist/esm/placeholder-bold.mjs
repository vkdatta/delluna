export const name="placeholder-bold";
export const id="dl_ca252ce5880b447a8b96";
export const url=new URL("../icons/placeholder-bold.svg?v=a0639fd846fb9d2e10a20043399a7ba7eb8135e1e7a7569c95646789128c66ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
