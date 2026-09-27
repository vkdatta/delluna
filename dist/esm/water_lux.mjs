export const name="water_lux";
export const id="dl_8b70ceb7a1094a28f209";
export const url=new URL("../icons/water_lux.svg?v=6dde1ce2e4d8d36849efb7ebb5e5654536237d8bd6b244fa73ed5edccd92b86f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
