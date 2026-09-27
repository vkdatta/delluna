export const name="rss-simple-duotone";
export const id="dl_42004ce6ccf34d9eb68e";
export const url=new URL("../icons/rss-simple-duotone.svg?v=1191c00e7ce115501b30fdd6773af827862b628d2f7c90451ca20fa3fefa7f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
