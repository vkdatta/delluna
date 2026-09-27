export const name="two_pager-fill";
export const id="dl_af031bbe0281d6b7403d";
export const url=new URL("../icons/two_pager-fill.svg?v=502f213f101c13cc79a3d2cf1aad66069f3888c26bd7b2428964c4d17a7c299e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
