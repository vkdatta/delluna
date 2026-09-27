export const name="shopping-bag-open-bold";
export const id="dl_b224fe1baded48edef99";
export const url=new URL("../icons/shopping-bag-open-bold.svg?v=f718fda3a2755f40ad2b77eb08b0f1e6c1b5e10b028e1f9ebbc3374c0194dea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
