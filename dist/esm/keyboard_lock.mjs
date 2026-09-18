export const name="keyboard_lock";
export const id="dl_d866bd77580c4cc490dc";
export const url=new URL("../icons/keyboard_lock.svg?v=3f37ea4af6106f18f40ae94334077073c09666c5bb88fb3da167ee098bd4023b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
