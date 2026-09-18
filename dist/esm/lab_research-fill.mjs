export const name="lab_research-fill";
export const id="dl_b2605c61f59a4ca48899";
export const url=new URL("../icons/L/lab_research-fill.svg?v=dace144b28457bf35edc766ff4bb892b3450211ce419e00ad110d385546d0f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
