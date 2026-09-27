export const name="selection-bold";
export const id="dl_5f7694ed12551dd61bd7";
export const url=new URL("../icons/selection-bold.svg?v=da6a91a66f7ed461e6a5a811fb162e14ae1df9377492e5b1f0ee09e4a8bf2bea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
