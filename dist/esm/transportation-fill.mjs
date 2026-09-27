export const name="transportation-fill";
export const id="dl_f544b7993e7323521625";
export const url=new URL("../icons/transportation-fill.svg?v=27587df208fdaed6ed5fc4bca861aa689946f629e73f5fd5c7a61200973c50c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
