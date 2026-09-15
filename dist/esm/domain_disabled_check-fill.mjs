export const name="domain_disabled_check-fill";
export const id="dl_7ea2ce47381740ea8375";
export const url=new URL("../icons/D/domain_disabled_check-fill.svg?v=55a56284b510a11f6213408d7672f00efb1375d6295f23900219db7e8c3c2b9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
