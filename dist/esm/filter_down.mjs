export const name="filter_down";
export const id="dl_5640d0663df15f67581b";
export const url=new URL("../icons/filter_down.svg?v=a72698b9c95e5965af226a0f8d81331868d35a6fd6521ecda816e38cec21a81d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
