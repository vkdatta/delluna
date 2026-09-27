export const name="lucid_3-square-chevron-down";
export const id="dl_18fb09c635b34fa7b125";
export const url=new URL("../icons/lucid_3-square-chevron-down.svg?v=bd9fcd7574b99d0bae48346dae2660e138cf5e308c504ff6aec47d7411744e02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
