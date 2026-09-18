export const name="videogame_asset_off";
export const id="dl_ee7eafd912c1449d93fe";
export const url=new URL("../icons/V/videogame_asset_off.svg?v=95c0d39dfbb7b9042b693a1c5a29d71b625e9a4176d506da410ecf3e190403ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
