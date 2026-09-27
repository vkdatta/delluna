export const name="database";
export const id="dl_ad12aa41115042d09e63";
export const url=new URL("../icons/database.svg?v=7f50050c73187bdec39b4221be81f9f232afe3d22faaa4040c91b1c213ae7947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
