export const name="mode_of_travel-fill";
export const id="dl_1cf9776d1cb237310af9";
export const url=new URL("../icons/mode_of_travel-fill.svg?v=943071743ffcde8a931372d81d84bf082d74ebf383721aeccb3c4c08f8b6b649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
