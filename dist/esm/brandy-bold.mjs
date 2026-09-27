export const name="brandy-bold";
export const id="dl_53b98cb1d1894c12bf67";
export const url=new URL("../icons/brandy-bold.svg?v=ad9e9d9220c7c1a078053246c1d98369a06ab082fc38a82608d3182766249106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
