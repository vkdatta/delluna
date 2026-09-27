export const name="approval_delegation";
export const id="dl_e1fe52918e8e79088f4c";
export const url=new URL("../icons/approval_delegation.svg?v=1f3f9c6f669d65f0905eec7e7edebce7817944612281c48699b8b778b6414c2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
