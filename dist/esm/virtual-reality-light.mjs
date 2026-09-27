export const name="virtual-reality-light";
export const id="dl_ee7612ca36ef44c04ead";
export const url=new URL("../icons/virtual-reality-light.svg?v=3c6346f7ef65f684434dfdca9847d8fcd5359e99c7f566d1e3cc2d41f6fb18a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
