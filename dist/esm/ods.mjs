export const name="ods";
export const id="dl_3d95624a6e6f471de2a5";
export const url=new URL("../icons/ods.svg?v=affaa251f4e0ac8be6d04735dfde0a911e71c2f1cb68a040646932bfce3ae711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
