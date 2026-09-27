export const name="shoppingmode";
export const id="dl_8435c150477c89eba42d";
export const url=new URL("../icons/shoppingmode.svg?v=ab913683dccbd0acb6939a8cee8e40e8bc209ff9572e629a606b3a3150bde220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
