export const name="file-zip-bold";
export const id="dl_df67dcc4967b41c9bcaf";
export const url=new URL("../icons/file-zip-bold.svg?v=e1277bc263dcaf4590808fd1bb3f6b4273eec06ae52def5ad7119ae7d92ace63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
