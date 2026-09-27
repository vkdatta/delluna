export const name="basket-bold";
export const id="dl_d7e6b2beee854c678e54";
export const url=new URL("../icons/basket-bold.svg?v=a412e796b9ce3fb514de2bfb1d235fcb91ba3e040c623009630d79eb352b7858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
