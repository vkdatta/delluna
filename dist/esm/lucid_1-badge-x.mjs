export const name="lucid_1-badge-x";
export const id="dl_2e7448e053b547c4a67c";
export const url=new URL("../icons/lucid_1-badge-x.svg?v=2cd78db8871759d94fcab00a954d68d8791fd491be337112dcb474b9e9f5bd10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
