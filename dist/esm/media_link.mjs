export const name="media_link";
export const id="dl_1805563aaed4ff80ba8f";
export const url=new URL("../icons/media_link.svg?v=1f133b30379e5ec49827a80369e5c5028e2ff253ea89519304db395c15831135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
