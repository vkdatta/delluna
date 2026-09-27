export const name="lucid_2-file-type";
export const id="dl_c07af63eb98a4ef19521";
export const url=new URL("../icons/lucid_2-file-type.svg?v=b3d84baff7312d7982dbd872484483bdf83664ddf6508ca69e93e52bab2217f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
