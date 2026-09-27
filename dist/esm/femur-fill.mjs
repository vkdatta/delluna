export const name="femur-fill";
export const id="dl_e617304399d63e46bb08";
export const url=new URL("../icons/femur-fill.svg?v=b3f277f38102c9cf82babbf6a201965d639d7095a716e1d278d55af91053f4f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
