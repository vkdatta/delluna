export const name="graph_8-fill";
export const id="dl_27f2b11dc8a10f24ec06";
export const url=new URL("../icons/graph_8-fill.svg?v=87c957cc3c7bdd7d0c591cd71cacba7c3bb623e35c3a2d8c544b7260a4414ba0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
