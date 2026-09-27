export const name="cherries";
export const id="dl_8d5e962de90d4717b3de";
export const url=new URL("../icons/cherries.svg?v=412e2fe4245b7bb2af4131a4b8c5ccef7275ef17a07be2856644a8564c4bd08d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
