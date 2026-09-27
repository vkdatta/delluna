export const name="next_plan";
export const id="dl_56603e90bd25ef93a4cd";
export const url=new URL("../icons/next_plan.svg?v=84e1b8327507237fa64ae6505f90b8cd2460fa9d07c93231e68e05f857c166d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
