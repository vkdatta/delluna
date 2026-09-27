export const name="chat-centered-text-bold";
export const id="dl_1af2d0410bc24ab2b68c";
export const url=new URL("../icons/chat-centered-text-bold.svg?v=2f15476315269da2f174efa541a02dc9c32ecd836296c56184461faf57720398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
