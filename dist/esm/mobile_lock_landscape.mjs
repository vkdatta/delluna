export const name="mobile_lock_landscape";
export const id="dl_325f242f0b134ce4b4ab";
export const url=new URL("../icons/M/mobile_lock_landscape.svg?v=ca218f12122e773fd4872a5abe26afe4e077c85dfee483c93b31c2123b880da6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
