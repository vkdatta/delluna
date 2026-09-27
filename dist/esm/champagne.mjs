export const name="champagne";
export const id="dl_b09c4607c6664780b5d1";
export const url=new URL("../icons/champagne.svg?v=ece0227c113f945bf0d3df26648e5a7590f29612b2a5f662f0552d5a1166f767",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
