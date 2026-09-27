export const name="guardian-fill";
export const id="dl_8d71684a431ceb276a72";
export const url=new URL("../icons/guardian-fill.svg?v=0a71260680a8b22fc6251a1db574fde22db2261e80dde2d95e0785dbfe5304bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
