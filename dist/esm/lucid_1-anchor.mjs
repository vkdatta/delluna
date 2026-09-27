export const name="lucid_1-anchor";
export const id="dl_b16c2fe01cb14698a9fc";
export const url=new URL("../icons/lucid_1-anchor.svg?v=c3b97d11e316242232e05d6522f50937b7f3763dc3d60ea2fddc015ce312d997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
