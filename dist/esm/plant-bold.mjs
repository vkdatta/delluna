export const name="plant-bold";
export const id="dl_48192036849648d88258";
export const url=new URL("../icons/plant-bold.svg?v=a04e478e77a14a8a4be99501f383f5ed260d651cbc1b45dafdcaa198f56c55c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
