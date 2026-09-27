export const name="shoppingmode";
export const id="dl_a7b55a20e0b4c8efe86d";
export const url=new URL("../icons/shoppingmode.svg?v=904cfd71d33199384bfd00cc8319fb45949cc4ce3b5f09ec8f59d69fd4bcac09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
