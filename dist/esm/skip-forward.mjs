export const name="skip-forward";
export const id="dl_2cd3034ba6314c869298";
export const url=new URL("../icons/S/skip-forward.svg?v=52f1ed5a89f1a38bf8537b38bd2da0501e396fc4cb03a2cdde38d248ceb03fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
