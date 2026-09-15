export const name="bungalow-fill";
export const id="dl_795831ceb6234eaba76b";
export const url=new URL("../icons/B/bungalow-fill.svg?v=136be583904f72bb4c2d73b2497aedcee7cd45ecfa453259087719446188ea79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
