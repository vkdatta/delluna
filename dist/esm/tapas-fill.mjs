export const name="tapas-fill";
export const id="dl_01ba2111c790d96249c9";
export const url=new URL("../icons/tapas-fill.svg?v=435eab4c5248d3d0b155d1750238c7f3863cd72349beda25d5c6de8468120178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
