export const name="toilet";
export const id="dl_1d6562ec993342d8b5fe";
export const url=new URL("../icons/toilet.svg?v=687a99e51564334c87626fcc8167d628ae983dfdbf607b7118580151451fcadb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
