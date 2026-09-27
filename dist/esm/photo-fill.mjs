export const name="photo-fill";
export const id="dl_a6823fc93eaf2e183d81";
export const url=new URL("../icons/photo-fill.svg?v=f25c004fb1eb6876ed1a0d74b23dc5749de8b4caf4688af29656e6875a26e0ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
