export const name="vector-square";
export const id="dl_afe26bf808ea43e99efc";
export const url=new URL("../icons/vector-square.svg?v=0e59e11f1e349c26b9094bdda83fb37c3281476181d5e607b1e801ed4a4876bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
