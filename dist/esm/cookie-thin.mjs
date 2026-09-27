export const name="cookie-thin";
export const id="dl_62716257eec04daba452";
export const url=new URL("../icons/cookie-thin.svg?v=1b44877368a966db6d45b2474419315e6912363623dfff4895b2a8b9998e6abb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
