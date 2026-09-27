export const name="sports_bar-fill";
export const id="dl_30df4318b6c853d210cb";
export const url=new URL("../icons/sports_bar-fill.svg?v=77015669bbeb75b028b47655dcee609928cf9555dfbb00f04a14a8f2ad60b7b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
