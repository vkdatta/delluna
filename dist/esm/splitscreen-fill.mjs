export const name="splitscreen-fill";
export const id="dl_4a1e1035feb1fec8c03a";
export const url=new URL("../icons/splitscreen-fill.svg?v=88d91e822cfe405e628098dd8be83c43aea90c7b4582b083e900b73155753a8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
