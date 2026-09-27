export const name="graph_7-fill";
export const id="dl_6d373052fe43b028b08c";
export const url=new URL("../icons/graph_7-fill.svg?v=10b280c294998911ead74f90e5894752e443b2157166d725899972239db50a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
