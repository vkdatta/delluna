export const name="swap_driving_apps";
export const id="dl_c5c5f4523da54fc8aff5";
export const url=new URL("../icons/swap_driving_apps.svg?v=a89144a89ec8b1712221f26c6a6d6d6f514f1c1bfb01d29fad36840f6177529f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
