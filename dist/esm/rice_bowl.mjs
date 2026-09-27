export const name="rice_bowl";
export const id="dl_7390be97bd09202c1ed1";
export const url=new URL("../icons/rice_bowl.svg?v=aae97fff5d7a72483ea79f7cbe19cbf1e4effb51697e9e18913ef8e9f4e92b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
