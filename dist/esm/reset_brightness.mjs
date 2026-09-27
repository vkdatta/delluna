export const name="reset_brightness";
export const id="dl_939a1a5eb522dcccb836";
export const url=new URL("../icons/reset_brightness.svg?v=979f800403258a68b56bc3832d6640a39af8c85adae3c5e75a3fcdcae5fcdaeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
