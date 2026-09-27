export const name="bubble_chart";
export const id="dl_1248056361f59b2f9185";
export const url=new URL("../icons/bubble_chart.svg?v=879f8abe12527145541f983687fe075bf9f546bd2d8e5decdbb5f5aba449a23f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
