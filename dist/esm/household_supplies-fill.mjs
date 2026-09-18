export const name="household_supplies-fill";
export const id="dl_2d51a93816384060ab25";
export const url=new URL("../icons/H/household_supplies-fill.svg?v=43bc9b6a835b70e12d2d003e243b965dfc2f4ae53c476cc9e1aa17ba7cfab16c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
