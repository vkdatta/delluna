export const name="tabs-bold";
export const id="dl_2688cd6127ed6bd35585";
export const url=new URL("../icons/tabs-bold.svg?v=0110dddfc3501c49adf910d7fe8d3198ff83bf7b425abbb08557f471d756e8e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
