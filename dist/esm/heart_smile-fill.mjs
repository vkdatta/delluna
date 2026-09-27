export const name="heart_smile-fill";
export const id="dl_016b7365e9a9ece8e4df";
export const url=new URL("../icons/heart_smile-fill.svg?v=ee9108ac1cc7ee2bd498316fa488dfc647dae7c2b7a41cae2a4f43535532ca6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
