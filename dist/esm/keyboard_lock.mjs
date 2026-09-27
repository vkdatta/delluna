export const name="keyboard_lock";
export const id="dl_2ef1829291378e0b88b9";
export const url=new URL("../icons/keyboard_lock.svg?v=7d139aae120df65cceebeb245b3a2a775975b239dfae0be4d68478966c3d162c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
