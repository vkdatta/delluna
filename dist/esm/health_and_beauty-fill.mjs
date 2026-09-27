export const name="health_and_beauty-fill";
export const id="dl_341fb577f22c58295498";
export const url=new URL("../icons/health_and_beauty-fill.svg?v=3a8dd0f7f232969306984e99999390a08d964a33c9c88b76b0a082f74f0f3d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
