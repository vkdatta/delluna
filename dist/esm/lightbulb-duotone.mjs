export const name="lightbulb-duotone";
export const id="dl_6fbd013d61e24632a626";
export const url=new URL("../icons/lightbulb-duotone.svg?v=9749207a6fdaa9d10805fbb1b3ad75d7ecd7acc242f1f174978d985dea41f5d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
