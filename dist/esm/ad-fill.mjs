export const name="ad-fill";
export const id="dl_9dbae7f2576ed32e87aa";
export const url=new URL("../icons/ad-fill.svg?v=677db51b843e1b5d75e948fdfff3e98b3163196a8dee63b6b5454687db099f76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
