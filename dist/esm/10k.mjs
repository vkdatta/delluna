export const name="10k";
export const id="dl_a7ee187a68cb9c17f310";
export const url=new URL("../icons/10k.svg?v=17fbe3140a773e3584ac9ec3fe6af59edbfaee76c89003b1f9c21daf43d57523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
