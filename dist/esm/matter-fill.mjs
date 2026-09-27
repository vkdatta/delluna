export const name="matter-fill";
export const id="dl_ed582e4b973dbe0da251";
export const url=new URL("../icons/matter-fill.svg?v=840246875837371c17dcd57f4d1c6e5e6651ac6622be3c073b5d5ad04ee7ac11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
