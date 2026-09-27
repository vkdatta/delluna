export const name="text-h-three-light";
export const id="dl_bc87e688f2df8ecee741";
export const url=new URL("../icons/text-h-three-light.svg?v=0ae1993e2192e48a67b690c048436a2b8f4502532adb95469de21774e0078ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
