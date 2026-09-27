export const name="siren_check-fill";
export const id="dl_cdb7c6974e6c7dd2dc03";
export const url=new URL("../icons/siren_check-fill.svg?v=3e2f5bc07f05bb5cae35ca93fb20fb4eed2d33cf7108f0b8b88bb1956917b3e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
