export const name="tab_new_right";
export const id="dl_7246c04984749e8ca135";
export const url=new URL("../icons/tab_new_right.svg?v=bd25ae770b2351e755048b4f39da6a22b904b88147f399f497cd17af7214c5f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
