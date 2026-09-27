export const name="landscape_2_off-fill";
export const id="dl_7284c9f573363c4f1996";
export const url=new URL("../icons/landscape_2_off-fill.svg?v=bd016d4eee1ba8295d1724ffad62d06876ec2321188c330cb2709fc7146a344c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
