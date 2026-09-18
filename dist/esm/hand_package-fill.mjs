export const name="hand_package-fill";
export const id="dl_c110ce50a63c49b2ad8d";
export const url=new URL("../icons/hand_package-fill.svg?v=5c154a6369f9d91170b19c9f8189be87527696fde24818ced87991b24e9ad07d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
