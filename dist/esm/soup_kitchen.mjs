export const name="soup_kitchen";
export const id="dl_552cb882d6736e5f2224";
export const url=new URL("../icons/soup_kitchen.svg?v=e4a09b96265e02a3024f5d2ae17f61d371e97916e73418b7ca3a054270a21a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
