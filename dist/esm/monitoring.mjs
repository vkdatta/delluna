export const name="monitoring";
export const id="dl_cd61fab7aa2e417e8456";
export const url=new URL("../icons/monitoring.svg?v=f614c5f8dc7fac853070d0db83755e409834be48bb0427a7b5257094b1ad163c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
