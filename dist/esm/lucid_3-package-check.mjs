export const name="lucid_3-package-check";
export const id="dl_a862c7c27eb14d059cc2";
export const url=new URL("../icons/lucid_3-package-check.svg?v=d1066da1199400cf57b36d9985e3ef5b3d0ac4d4c2f9a172df6f1c0df8be5002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
