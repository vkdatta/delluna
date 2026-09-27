export const name="arrow_downward-fill";
export const id="dl_cd99fd628e936b2f8e47";
export const url=new URL("../icons/arrow_downward-fill.svg?v=1918ea73dc6dcba27486281b16f728da3eeba48e4b25c55701d4c1b5bd2711eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
