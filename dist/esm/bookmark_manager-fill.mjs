export const name="bookmark_manager-fill";
export const id="dl_416767e5636a4f588b2e";
export const url=new URL("../icons/bookmark_manager-fill.svg?v=f982178ccab472d63dafeffc170cab72bece78d66a3a86303ed61667f34573ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
