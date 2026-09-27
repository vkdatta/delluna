export const name="vertical_swap";
export const id="dl_21d1d3f2eb79425f89de";
export const url=new URL("../icons/vertical_swap.svg?v=740651aa2e1bc4ba07afdfdd82ed0cf2390b0448bfeba94245e20b1861b66414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
