export const name="user-x";
export const id="dl_be1fe404522d4c8faaa9";
export const url=new URL("../icons/user-x.svg?v=39b080780987fe342af9a46d26323c9b92ee965ee2a0b1f802163d2abb6e3039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
