export const name="view_carousel";
export const id="dl_37c1ff7e448240070d12";
export const url=new URL("../icons/view_carousel.svg?v=6287c2a82eb12f9b83cfb1844bc09ae5f8c3665402fcd7b13362b95b0a65b16a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
