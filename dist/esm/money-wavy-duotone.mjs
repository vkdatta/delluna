export const name="money-wavy-duotone";
export const id="dl_e920bbb1a06e421faf25";
export const url=new URL("../icons/money-wavy-duotone.svg?v=cea1858f8193f14c01dc3132910533575936f78f2b2ed478229c690719a212e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
