export const name="bid_landscape-fill";
export const id="dl_e04e87be681547b51167";
export const url=new URL("../icons/bid_landscape-fill.svg?v=df9f9e1291db067826b7647a3c01742eb7f26d34589fde36640f6bd6bb64088c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
