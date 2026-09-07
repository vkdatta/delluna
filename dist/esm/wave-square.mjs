export const name="wave-square";
export const id="dl_cc1c41846e194a91a6a6";
export const url=new URL("../icons/W/wave-square.svg?v=35dae26b04ded183e692a764a471e3a6ecb7f3cebdb36c018b212394e4cc2575",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
