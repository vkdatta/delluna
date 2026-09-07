export const name="wheelchair-motion";
export const id="dl_a07d5664cdc04ecebe9d";
export const url=new URL("../icons/W/wheelchair-motion.svg?v=4c6e27b727b2b0b1cb44ab881cf1aa098e9205f982f20bde79b54b024f7d9a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
