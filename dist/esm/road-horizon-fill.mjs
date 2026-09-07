export const name="road-horizon-fill";
export const id="dl_82c6830735284e40bafd";
export const url=new URL("../icons/road-horizon-fill.svg?v=14eaf71b360830adc1aff4ae3f892596a8c2250cfb9aa6ebb3afefa730d936a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
