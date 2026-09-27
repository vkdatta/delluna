export const name="currency-btc-bold";
export const id="dl_b76d4c9b813047048a54";
export const url=new URL("../icons/currency-btc-bold.svg?v=1bee31ba9f6e98141436a6c38aad8c33d325e5e67b7b88dd88949b4727fc6421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
