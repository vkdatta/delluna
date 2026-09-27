export const name="lucid_2-heart-off";
export const id="dl_60d2d45fdfb14030af41";
export const url=new URL("../icons/lucid_2-heart-off.svg?v=d0aa568833ac0a30625c1cac1c4380bc1e48bfe3c1c005eee8be2c0981bca728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
