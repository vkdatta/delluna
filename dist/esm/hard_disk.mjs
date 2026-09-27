export const name="hard_disk";
export const id="dl_a3af65023927bfeb1ed0";
export const url=new URL("../icons/hard_disk.svg?v=6bd018e650d5bdef3aed5f33b5477c4e1bc269057a9fde633eb26a5217b5d2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
