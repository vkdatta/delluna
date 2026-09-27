export const name="counter_8-fill";
export const id="dl_3edb93f3b47451d519ac";
export const url=new URL("../icons/counter_8-fill.svg?v=67efb08f62b79692e22f0cdac58866f5508d5299f1f9e9d820e96dfbba4c1069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
