export const name="floppy-disk";
export const id="dl_39fde0b952814fb0880d";
export const url=new URL("../icons/floppy-disk.svg?v=29f189ce9181f37a443fbebaf12bfc2274c90719a4cd5714772b946d81f1519d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
