export const name="bakery_dining-fill";
export const id="dl_c23f30343d675bc1cb44";
export const url=new URL("../icons/bakery_dining-fill.svg?v=6192df6780703828525b788cb463390a0dd5d82199c4ffa521f525db4a12b698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
