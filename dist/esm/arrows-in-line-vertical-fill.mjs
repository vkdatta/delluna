export const name="arrows-in-line-vertical-fill";
export const id="dl_c9824a15cbf34b66a91b";
export const url=new URL("../icons/arrows-in-line-vertical-fill.svg?v=c11b142cb767cfa75e23bc94fea55bb1e4e07475bec5ddd7fa76b95f3c29c158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
