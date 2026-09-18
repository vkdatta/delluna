export const name="siren_check";
export const id="dl_51888721dc414c65b5f2";
export const url=new URL("../icons/S/siren_check.svg?v=8a435a4ae8ebb80006fa20f09fd4dcfd1b6e4c18583c51b638288c832ec09825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
