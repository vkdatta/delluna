export const name="file_copy_off-fill";
export const id="dl_e771f1cbaa83215cc686";
export const url=new URL("../icons/file_copy_off-fill.svg?v=3d1d094a45e98ad9d75bdc8597d19d30aae971f9143e13a9756954c35f91666d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
