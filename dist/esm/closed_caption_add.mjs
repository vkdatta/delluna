export const name="closed_caption_add";
export const id="dl_a11de65cded589fbb588";
export const url=new URL("../icons/closed_caption_add.svg?v=c22cdd1b37a7471c6fd6856addaff6c6b66be99a1d790a16f55c3c0c1fd74f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
