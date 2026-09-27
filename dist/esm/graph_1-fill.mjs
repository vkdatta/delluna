export const name="graph_1-fill";
export const id="dl_63a69a091d7f3d6b5721";
export const url=new URL("../icons/graph_1-fill.svg?v=5fd6960b1da36b92f1e66ff39a86ba69fe0ea952fb5222372c3706222e3fc99f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
