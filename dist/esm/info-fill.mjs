export const name="info-fill";
export const id="dl_29d29a860c0d4cebaab4";
export const url=new URL("../icons/info-fill.svg?v=571bc77dddbf5ffa56fccc51d751ced480a93682d8361a2b738d4fbc8f250990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
