export const name="piggy-bank-fill";
export const id="dl_beafec7272d745ab948b";
export const url=new URL("../icons/piggy-bank-fill.svg?v=0645e0b663c6edbe86c16c5890918f9c2a50f3a90ecee9a91e22e7fb817cbb2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
