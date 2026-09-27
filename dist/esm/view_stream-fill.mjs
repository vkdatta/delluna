export const name="view_stream-fill";
export const id="dl_e1e298f69416d2572025";
export const url=new URL("../icons/view_stream-fill.svg?v=bec5c5a6f19c497f0d235585c9e03f3fa5c7ac90972523d772077f50702d0806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
