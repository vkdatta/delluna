export const name="graph_1-fill";
export const id="dl_8391eaa4ee6d6e0d5b68";
export const url=new URL("../icons/graph_1-fill.svg?v=6501187d872fe606b55a582653d5739b22e4ec38ec886e6d97c2538171a3f7e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
