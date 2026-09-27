export const name="e_mobiledata_badge";
export const id="dl_de8dff5d273c098ba084";
export const url=new URL("../icons/e_mobiledata_badge.svg?v=52fbb7536e7c4ff41eb1032d179767a6d85d42b6917df678f497bf8565f6235a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
