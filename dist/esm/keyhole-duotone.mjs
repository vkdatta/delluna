export const name="keyhole-duotone";
export const id="dl_1028b0e2f7e24e90bc39";
export const url=new URL("../icons/keyhole-duotone.svg?v=190e6307681067c721719f2198a8d903fe565cee5c241d66789e73c1304c805c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
