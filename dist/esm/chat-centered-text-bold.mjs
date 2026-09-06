export const name="chat-centered-text-bold";
export const id="dl_1af2d0410bc24ab2b68c";
export const url=new URL("../icons/chat-centered-text-bold.svg?v=401aa39ceaa3622ca1a6cf79393996ac00c21089aeaa188c9570691ee0e7d4d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
