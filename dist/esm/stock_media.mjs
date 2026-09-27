export const name="stock_media";
export const id="dl_911c75f850eceda94eab";
export const url=new URL("../icons/stock_media.svg?v=f8c65b4c1870183e07327f45db64d615cc867b3f9f5dcb12953a89c4dc537ce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
