export const name="selection-foreground-thin";
export const id="dl_d78225406b564a24898c";
export const url=new URL("../icons/S/selection-foreground-thin.svg?v=c2b890675970f980563a7b58fb093453f4b0c8c61331d131453686173901805c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
