export const name="signature";
export const id="dl_ef4f552be3254d25aab4";
export const url=new URL("../icons/S/signature.svg?v=f21b5238263ae7eb30f16a34beb504446af824276e2b6b697d9867a8e009efce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
