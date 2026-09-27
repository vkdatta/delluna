export const name="watch_arrow";
export const id="dl_40fdeab3494b39804b2b";
export const url=new URL("../icons/watch_arrow.svg?v=8610b1a71d3afb521c9c1c23dc76a54ac225929d953f63ebaa53a4945b3408d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
