export const name="home_max";
export const id="dl_63345d9466f14bbd8f0d";
export const url=new URL("../icons/home_max.svg?v=24b1f95a7f73fea7719bce1ed45a7633fb41808b5f43d68da73001a9484e5594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
