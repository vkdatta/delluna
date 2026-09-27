export const name="file-zip-bold";
export const id="dl_df67dcc4967b41c9bcaf";
export const url=new URL("../icons/file-zip-bold.svg?v=729b24f6f02d40dffb71f1ff895d2494490f414159442496e46175d7afa5b6b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
