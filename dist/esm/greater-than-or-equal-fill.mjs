export const name="greater-than-or-equal-fill";
export const id="dl_d3ab93cd4b1d4621a40d";
export const url=new URL("../icons/greater-than-or-equal-fill.svg?v=e7369979b1f1a6335618d8540605d8fbfd84f2efa0bf27116b27e55896a48942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
