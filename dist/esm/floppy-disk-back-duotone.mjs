export const name="floppy-disk-back-duotone";
export const id="dl_7fb94593aad1421fb2f7";
export const url=new URL("../icons/floppy-disk-back-duotone.svg?v=83c0b4d74540e63b731250e2949a64ec43c070c38381bc70fa076e884a3acfee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
