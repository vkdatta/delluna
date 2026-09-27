export const name="hdr_plus_off-fill";
export const id="dl_898949f4be88d5aaf2a2";
export const url=new URL("../icons/hdr_plus_off-fill.svg?v=221f90b8a7df9a4b4c881a2fb92df5a0e551942c34f707bdd88cb1a36624d8e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
