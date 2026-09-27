export const name="earbuds";
export const id="dl_39e8fb44f9ffa7c4e9c2";
export const url=new URL("../icons/earbuds.svg?v=d1c15f88d4a7fba43816250c9c3b3220eeacb376062109fca579688c5e3bb2ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
