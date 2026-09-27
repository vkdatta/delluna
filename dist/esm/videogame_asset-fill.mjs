export const name="videogame_asset-fill";
export const id="dl_a8f4d24d9b0c1864179f";
export const url=new URL("../icons/videogame_asset-fill.svg?v=216e05fd35a1d6927734d52de933759fc2c98e43e829f5b4757e65d7f5c21f1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
