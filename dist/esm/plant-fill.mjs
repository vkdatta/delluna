export const name="plant-fill";
export const id="dl_ae5ab8a9d4c64d5e8449";
export const url=new URL("../icons/plant-fill.svg?v=c412baa84e315499bc9709939fd90928132020be1012c0d0bf17b5d68dfda34c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
