export const name="money";
export const id="dl_09eb634d0ffd4c63a64f";
export const url=new URL("../icons/money.svg?v=3afcd3ad2bb23f47137a0d926132e42163fd8b76d6cfdf12ada27145d343f7f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
