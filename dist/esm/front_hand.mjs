export const name="front_hand";
export const id="dl_354e07ca1206ab2533d8";
export const url=new URL("../icons/front_hand.svg?v=b074af73bb5e6afeb319ca8585d87275ae5ad563f75cba4475e8a119d09a6224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
