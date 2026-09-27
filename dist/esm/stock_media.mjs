export const name="stock_media";
export const id="dl_16de0213e6b8d5f38763";
export const url=new URL("../icons/stock_media.svg?v=7294e3a7435c8731fbe1a4001c8b56a397558d88e884ad8462c4686e05273706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
