export const name="square-half-duotone";
export const id="dl_41bcf39cd283a8748f60";
export const url=new URL("../icons/square-half-duotone.svg?v=40a7279d81666e302552b944f558e175ac19a91c7a034fceaf0e2dc9616a4c95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
