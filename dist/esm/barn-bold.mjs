export const name="barn-bold";
export const id="dl_3c2e6eee6e184df2b68b";
export const url=new URL("../icons/barn-bold.svg?v=a505b4e9f6fe3503298faf22ad8b57ada6c036d7bf290079e6fdaa19eab4c92c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
