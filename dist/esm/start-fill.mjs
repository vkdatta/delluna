export const name="start-fill";
export const id="dl_78c4bb05be9633aa2b91";
export const url=new URL("../icons/start-fill.svg?v=bf026a8533d3e12ebfa7358b049d3d12c5299578dd88020ffe0fc98a64b1cf6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
