export const name="food_bank-fill";
export const id="dl_46109f80eb42444cbf6d";
export const url=new URL("../icons/F/food_bank-fill.svg?v=9a9e1208505d4f37aea3a1b3871d3e6240ac7bb06ba71f20dc369f86d954a71f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
