export const name="tab_close_inactive";
export const id="dl_b769bdb98a8859e2f9f2";
export const url=new URL("../icons/tab_close_inactive.svg?v=48a023e5a2425ac422b15bdd955f6cc60cfc71f0b745e50d3fe94a33bcbebad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
