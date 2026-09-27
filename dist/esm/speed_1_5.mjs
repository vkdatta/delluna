export const name="speed_1_5";
export const id="dl_5cebbd450c65ccb03671";
export const url=new URL("../icons/speed_1_5.svg?v=25658480627351aa0b93238f24d042162dfe3990c0a55f1ebaa00ff6513223f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
