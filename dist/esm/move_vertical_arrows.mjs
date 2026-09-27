export const name="move_vertical_arrows";
export const id="dl_d39eb362e4576a63bf2b";
export const url=new URL("../icons/move_vertical_arrows.svg?v=b8145effcf32f0a3190bf1805c9f7b51deb6ce8171691e400a1b70be838ae552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
