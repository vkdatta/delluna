export const name="shield_with_house-fill";
export const id="dl_62ae2baa306127f1eda9";
export const url=new URL("../icons/shield_with_house-fill.svg?v=e5ec7fa01fa00c15afd46b020591535f2a978fbee7c73a4f3bf573bb7e020713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
