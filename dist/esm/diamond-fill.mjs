export const name="diamond-fill";
export const id="dl_b3720df69399457292af";
export const url=new URL("../icons/diamond-fill.svg?v=d1f2fa68483efb2f47ebb24d2d25eba8892b50e160dacfe52f1a76e7b9f90e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
