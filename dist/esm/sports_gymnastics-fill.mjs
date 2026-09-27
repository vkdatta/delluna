export const name="sports_gymnastics-fill";
export const id="dl_23acaa4d5a95c5eb30db";
export const url=new URL("../icons/sports_gymnastics-fill.svg?v=9f5702707739812a856e67cf2a4da943b1007232c0d043290efaaee651ce75b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
