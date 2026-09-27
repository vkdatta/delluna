export const name="shades-fill";
export const id="dl_9f8a9c9b1a2ff849ba76";
export const url=new URL("../icons/shades-fill.svg?v=8e5e5b46b9c102332ca213ed9b9457d36c39b72a6b172ad0c97a6801784fc8c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
