export const name="videotape";
export const id="dl_df8d35336c4d4499a6be";
export const url=new URL("../icons/videotape.svg?v=3caed173a62ca3a26a10d126eff0e69be3ff802608d56e2ccdad9e3de63b0f2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
