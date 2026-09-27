export const name="text-align-right-fill";
export const id="dl_ce0b42ef815e30bd647c";
export const url=new URL("../icons/text-align-right-fill.svg?v=f6790a14fb1610410a68eac55087e0a87c28f545dc346437ae3dfbc6f82a29dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
