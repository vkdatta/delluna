export const name="mop-fill";
export const id="dl_7a0498c75e7782bf61b9";
export const url=new URL("../icons/mop-fill.svg?v=acdc7486f7033bff5bd470cbf152ceb2dbfa4395212fcd6c5aa577015b27311c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
