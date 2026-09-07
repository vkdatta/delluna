export const name="lucid_1-backpack";
export const id="dl_3f81dc893ee748a7b856";
export const url=new URL("../icons/lucid_1-backpack.svg?v=7e93797f1e3832f61d6c36ca19854abaedca807333cedc7614a0a6575427ca6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
