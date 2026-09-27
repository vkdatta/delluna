export const name="holiday_village-fill";
export const id="dl_3fe3337d3e0dcb52d85b";
export const url=new URL("../icons/holiday_village-fill.svg?v=9cebf7c4cf98d19f81a8b8ffe048b5bcb99c8fa527a1ea630806442c9066ce59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
