export const name="star-half-bold";
export const id="dl_6ac7309453b04bd6a3ad";
export const url=new URL("../icons/S/star-half-bold.svg?v=1d7844cf1792678e1f1d59241c32c0cfd763dee05335059014d209749518eb7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
