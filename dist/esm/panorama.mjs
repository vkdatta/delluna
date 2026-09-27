export const name="panorama";
export const id="dl_1d3021917af442cd85af";
export const url=new URL("../icons/panorama.svg?v=bba5b03a21319b376e8dcc082c63553745bedfc5ccf70ac55a3b7f7870b76374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
