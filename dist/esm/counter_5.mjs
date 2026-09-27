export const name="counter_5";
export const id="dl_2d11becf45c36a60a2a3";
export const url=new URL("../icons/counter_5.svg?v=55aaf6be7aa6a0c3f77322df18fa19a91362ec7e2838bef72ff223efa77f05a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
