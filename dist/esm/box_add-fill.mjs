export const name="box_add-fill";
export const id="dl_a7d93fd8c22bfd0d2e49";
export const url=new URL("../icons/box_add-fill.svg?v=15bffd62c4fc19a527e125e955b8971b660d2bd7d2e379b007c14f40bc52cc84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
