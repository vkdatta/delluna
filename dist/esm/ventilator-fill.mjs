export const name="ventilator-fill";
export const id="dl_9c755c868855a28330e7";
export const url=new URL("../icons/ventilator-fill.svg?v=f7a292886ca651a33f494fabee375b726fba7dd6680d9c8659aa4e363f636426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
