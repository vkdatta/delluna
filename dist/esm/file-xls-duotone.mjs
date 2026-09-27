export const name="file-xls-duotone";
export const id="dl_f4814cc9637548d9a1e8";
export const url=new URL("../icons/file-xls-duotone.svg?v=6a4ed2e13f18a838bf81571595ffbff919abf0757ff5bb6d3a3aaeaf288fbc78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
