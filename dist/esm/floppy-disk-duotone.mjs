export const name="floppy-disk-duotone";
export const id="dl_af13cb0211b4481594bd";
export const url=new URL("../icons/floppy-disk-duotone.svg?v=e53e4d979737bfd28c46a2907363c7925049ad54a42bfdc5248666fba3f741c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
