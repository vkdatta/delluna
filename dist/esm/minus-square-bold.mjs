export const name="minus-square-bold";
export const id="dl_1f4f7984393346569975";
export const url=new URL("../icons/minus-square-bold.svg?v=605b59a59b83c465ba4e77884ab84fb11e4f96db566da5dbb8b9bc5a5952763a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
