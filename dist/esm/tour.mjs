export const name="tour";
export const id="dl_b7458d14e25829a14435";
export const url=new URL("../icons/tour.svg?v=5c34d2d756d44f39f17628f263b5cd5f7bf8d2fc7c12e3a7f2094e1706e58fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
