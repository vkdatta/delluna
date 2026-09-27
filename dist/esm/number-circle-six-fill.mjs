export const name="number-circle-six-fill";
export const id="dl_ece58bdc7ab84d728f22";
export const url=new URL("../icons/number-circle-six-fill.svg?v=01a545fbe020e744daecad99c532e9455d966233cca16557412acea28af98302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
