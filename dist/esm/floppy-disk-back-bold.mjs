export const name="floppy-disk-back-bold";
export const id="dl_7b28413f2f7342b29c14";
export const url=new URL("../icons/floppy-disk-back-bold.svg?v=a471bb8b5d7b97d7a76310457a77d45568b592ae14fff33ae31b3b5fd5365fec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
