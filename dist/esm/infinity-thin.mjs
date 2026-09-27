export const name="infinity-thin";
export const id="dl_7d37b46e6d3149228b8e";
export const url=new URL("../icons/infinity-thin.svg?v=f749319f959ab4877d4280e1b1ec915c3e89597c05a5261ebcc795631c79321f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
