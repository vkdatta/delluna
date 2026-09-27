export const name="images-thin";
export const id="dl_d976dd8fb9474e69a605";
export const url=new URL("../icons/images-thin.svg?v=d9e36dd8c0e81b6136ecc6df6e500aeaf5ab94870184d2f793453e1da75e1e00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
