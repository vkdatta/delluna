export const name="device-mobile-fill";
export const id="dl_165831da0c704573b698";
export const url=new URL("../icons/device-mobile-fill.svg?v=fc64c9179804355ac36ef02bd462e04d032970a9bc7d97a4387e77ac1e5ae848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
