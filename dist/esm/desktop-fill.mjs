export const name="desktop-fill";
export const id="dl_a3e5cddad80a45abab30";
export const url=new URL("../icons/desktop-fill.svg?v=6a8247b9eccea2bdcd1cc442622d92f4be581f05c9704653757d5cd9b99302e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
