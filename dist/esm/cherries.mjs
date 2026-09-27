export const name="cherries";
export const id="dl_8d5e962de90d4717b3de";
export const url=new URL("../icons/cherries.svg?v=68bcd7f9c1ebf03594dc407787b0e8d5bf340137474667eefe8ca22399ed3cc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
