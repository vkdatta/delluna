export const name="floppy-disk-back-duotone";
export const id="dl_7fb94593aad1421fb2f7";
export const url=new URL("../icons/floppy-disk-back-duotone.svg?v=ef05eab3b4d6b1350d8a3e642029f229abd337d9525e29b2ca3c47bcfcf0b16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
