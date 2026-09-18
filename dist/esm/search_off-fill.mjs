export const name="search_off-fill";
export const id="dl_7951322be36d4bbeb3c7";
export const url=new URL("../icons/S/search_off-fill.svg?v=766a4629ba4467d1108785d9ead8a8291084dd1b5f7ab13b4d3830cbb46a5095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
