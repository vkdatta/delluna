export const name="cat-fill";
export const id="dl_00fa6cb7d3ff4be48447";
export const url=new URL("../icons/cat-fill.svg?v=f9cafce8b2488785831e8fa4a4eb1b9efcb7c291faa0162faa6cc3c07594ed49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
