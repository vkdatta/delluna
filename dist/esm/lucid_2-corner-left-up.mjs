export const name="lucid_2-corner-left-up";
export const id="dl_266799d06628438ab3d4";
export const url=new URL("../icons/lucid_2-corner-left-up.svg?v=b9d8a7985c72576dcfa54cfd5a17e83989a30cd3f1d3c6b4ad8272746dc72b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
