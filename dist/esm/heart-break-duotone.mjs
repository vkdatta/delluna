export const name="heart-break-duotone";
export const id="dl_74772ac99d8f49599564";
export const url=new URL("../icons/heart-break-duotone.svg?v=94d6b225d2ec6bcff61b5ab2c29afb1dcb42ef6e476a91fce276adca3ca45784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
