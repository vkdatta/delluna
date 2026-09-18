export const name="roofing-fill";
export const id="dl_c9927e7f15f54b86809c";
export const url=new URL("../icons/R/roofing-fill.svg?v=ed7e7a16fa79dc6ff65a3b3f3f1e19206d5a705312009494cc6a0f65b25d0c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
