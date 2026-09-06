export const name="copyleft";
export const id="dl_bc4fb1bffde0466cbc67";
export const url=new URL("../icons/copyleft.svg?v=c60699947faed1cb336a0e927f30dc034efd184caa7e5633dbf2b37e90e56e69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
