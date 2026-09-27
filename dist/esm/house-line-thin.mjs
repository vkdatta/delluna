export const name="house-line-thin";
export const id="dl_3d024e5e9f234354a3c8";
export const url=new URL("../icons/house-line-thin.svg?v=c72c1296ce0ffb7ba18a7483c1bcf1d397602124bdac33e008ea023064d047e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
