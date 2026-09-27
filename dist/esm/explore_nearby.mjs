export const name="explore_nearby";
export const id="dl_894d574c3e346bfd76be";
export const url=new URL("../icons/explore_nearby.svg?v=3410b08a7d3af84d9638f584cbf611126675702f2abe929dcc40d5fea79623ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
