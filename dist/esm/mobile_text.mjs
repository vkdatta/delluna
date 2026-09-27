export const name="mobile_text";
export const id="dl_1d4f3ea60e99ece18bc2";
export const url=new URL("../icons/mobile_text.svg?v=110b28343d6b43d7597487fac56f5e53c8a84058425ba5bf61595fc0d4b8ef82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
