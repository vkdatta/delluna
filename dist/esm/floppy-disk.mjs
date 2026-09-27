export const name="floppy-disk";
export const id="dl_39fde0b952814fb0880d";
export const url=new URL("../icons/floppy-disk.svg?v=d6798eb25d8782fbeb093d46898865a3943efecdf7252506a2c7dd95fe0c24d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
