export const name="subdirectory_arrow_right-fill";
export const id="dl_bc2689e185c404027b08";
export const url=new URL("../icons/subdirectory_arrow_right-fill.svg?v=d01cbf3fa83d3ea74b39bc5e8b3efa0d291ebae8a89999bad15f5ad02e1db4ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
