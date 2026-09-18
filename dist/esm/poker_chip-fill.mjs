export const name="poker_chip-fill";
export const id="dl_42c3a307ee3641e6aa0f";
export const url=new URL("../icons/poker_chip-fill.svg?v=d7e5da9eebb6319a9ee581775b937ecf226f01067f8f302e7d4e65ae3d90a798",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
