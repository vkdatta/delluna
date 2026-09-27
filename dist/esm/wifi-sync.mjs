export const name="wifi-sync";
export const id="dl_09270cc7e55a47658a45";
export const url=new URL("../icons/wifi-sync.svg?v=b9ac8a88c0327a78037937f6b2d67330c73a4115e8c0e17a5f429309f83a8fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
