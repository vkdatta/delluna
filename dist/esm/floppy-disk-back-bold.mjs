export const name="floppy-disk-back-bold";
export const id="dl_7b28413f2f7342b29c14";
export const url=new URL("../icons/floppy-disk-back-bold.svg?v=7be47009a19643a272b8d7316eaad1da296eb9abba25e6ac43982073be6c71e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
