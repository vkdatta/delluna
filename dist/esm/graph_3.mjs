export const name="graph_3";
export const id="dl_ba029da02e9a45a99729";
export const url=new URL("../icons/graph_3.svg?v=dafabbefc030c3e16c8490edc247eb86ba4a63dad447dc31e2c359423fc0510c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
