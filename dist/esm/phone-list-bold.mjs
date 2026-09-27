export const name="phone-list-bold";
export const id="dl_2e34c9fc0d7443ddb57a";
export const url=new URL("../icons/phone-list-bold.svg?v=c6e0d32282fc0ab604289ce0cf8d6e47ed2ad255141a89c4c41660cf48d82764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
