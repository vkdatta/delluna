export const name="lucid_3-satellite";
export const id="dl_345a0f5d1c774463bd00";
export const url=new URL("../icons/lucid_3-satellite.svg?v=6068af3d808a2e1a5304d4127dd8271660a7dfd569b44b73de51265fe191d824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
