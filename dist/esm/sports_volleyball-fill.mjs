export const name="sports_volleyball-fill";
export const id="dl_98856968253c0e84c4bb";
export const url=new URL("../icons/sports_volleyball-fill.svg?v=d2e97bc2afa0f6102d535f56df6fc647b8fc73e5773252d588b4db83f5fe59ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
