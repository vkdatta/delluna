export const name="bolt_boost";
export const id="dl_537f39a83c5f41a78e9b";
export const url=new URL("../icons/bolt_boost.svg?v=7784274339ea8407ec18bc118a349dced0d310e4e9eb9bf6c13b1dbe21869624",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
