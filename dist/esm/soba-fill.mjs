export const name="soba-fill";
export const id="dl_6b09c2d8a10a2650e166";
export const url=new URL("../icons/soba-fill.svg?v=f2a6835453fd26ce21ddeaa74a37807ee274214d0798de5932c3232ba033bde7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
