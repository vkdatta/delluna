export const name="spray-bottle";
export const id="dl_c233a02c0e2821eb4f9c";
export const url=new URL("../icons/spray-bottle.svg?v=c93fabf77d47984e79e520caf1e61c445e79ba111331765332a0687f92cbf62b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
