export const name="lucid_2-corner-left-up";
export const id="dl_266799d06628438ab3d4";
export const url=new URL("../icons/lucid_2-corner-left-up.svg?v=b40526142def85109aa78ef585e91f35784a93a66668f41ebfcd8564440ad992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
