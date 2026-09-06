export const name="gauge-fill";
export const id="dl_71baee47768a4b70a564";
export const url=new URL("../icons/gauge-fill.svg?v=356e497250225d08fda3b16cdb366ff1844ca6433365fb614d8406612095c8a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
