export const name="arrow-circle-right";
export const id="dl_f5f264bf3b204270be38";
export const url=new URL("../icons/arrow-circle-right.svg?v=41ebeb770799a163594ed754612402ae46264dd1c29809e50b03d3f17dc463db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
