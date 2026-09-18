export const name="brick-fill";
export const id="dl_94974eda01af4efbb39b";
export const url=new URL("../icons/brick-fill.svg?v=125c7d1baf8941bd29b0a9ed0cd144b4f520e0da7522276f313ec9ab07e44b7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
