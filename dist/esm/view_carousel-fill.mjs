export const name="view_carousel-fill";
export const id="dl_5405b7e289852fa97461";
export const url=new URL("../icons/view_carousel-fill.svg?v=203885430d969e1bc32e138f8efbbae4311e4b7096cf681f8517e3495a9c5188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
