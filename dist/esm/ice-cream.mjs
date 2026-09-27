export const name="ice-cream";
export const id="dl_e04126a51de84615933f";
export const url=new URL("../icons/ice-cream.svg?v=114c3247bcb540161d78443fc2aa9282495a88ed21ae68f5f81bc7b053ace318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
