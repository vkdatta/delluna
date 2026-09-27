export const name="activity_zone";
export const id="dl_c9bc17fac8d2cac98153";
export const url=new URL("../icons/activity_zone.svg?v=42f61dde5b91e8354d4c41842feb6344c92dbba7365d3c92d4b4c360515c0186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
