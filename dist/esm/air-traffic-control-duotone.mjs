export const name="air-traffic-control-duotone";
export const id="dl_1035ec9af3a14eddbfa8";
export const url=new URL("../icons/air-traffic-control-duotone.svg?v=2d662d30f804b6b0eb98b56e0927389824d26f1da5fa2fcaf30e4aef54bdc5ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
