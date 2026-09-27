export const name="e_mobiledata-fill";
export const id="dl_75bf97566dd9ffd061bd";
export const url=new URL("../icons/e_mobiledata-fill.svg?v=07531652aeaebe15314bf61c22b13a5d09e7fb3918aa65be9f09d2fbd95df6bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
