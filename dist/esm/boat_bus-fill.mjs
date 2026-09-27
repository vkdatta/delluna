export const name="boat_bus-fill";
export const id="dl_da36adcfab2dc38a815c";
export const url=new URL("../icons/boat_bus-fill.svg?v=89f2a5703e7693621539d0a63fce1442f04df5c8bce624c0d6e441f4a0278bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
