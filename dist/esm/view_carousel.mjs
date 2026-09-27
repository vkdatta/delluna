export const name="view_carousel";
export const id="dl_6153a2fea09ef1050065";
export const url=new URL("../icons/view_carousel.svg?v=c4f391c9949eabeb954a916387d9c3eb006e0913410fe7d3e228328461976013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
