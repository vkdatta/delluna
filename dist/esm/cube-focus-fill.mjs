export const name="cube-focus-fill";
export const id="dl_d390a3f6a9d948079d1a";
export const url=new URL("../icons/cube-focus-fill.svg?v=6753d7ca0ebe748935239c3339e41ae9b3943a9670e793b44cf7120feb621407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
