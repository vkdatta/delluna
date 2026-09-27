export const name="browse_activity-fill";
export const id="dl_c44f0b976d97d5d57ebc";
export const url=new URL("../icons/browse_activity-fill.svg?v=ebad48f2e128de3572c93862733c0d2e3ec38d459e98059a9a2f3ef1dd8940e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
