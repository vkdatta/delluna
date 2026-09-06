export const name="bounding-box-duotone";
export const id="dl_707931f93d444f0d9cde";
export const url=new URL("../icons/bounding-box-duotone.svg?v=adefe20900874ee84f8f18df777ea9222adad42a44693b954f5f642bd3d91cf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
