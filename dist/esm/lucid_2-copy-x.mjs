export const name="lucid_2-copy-x";
export const id="dl_d3d438c73bba460886aa";
export const url=new URL("../icons/lucid_2-copy-x.svg?v=1288da23797866924f2d32761cd623bf0c18fc1997d514624ba4538c25582a16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
