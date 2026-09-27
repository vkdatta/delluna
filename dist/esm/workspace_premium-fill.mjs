export const name="workspace_premium-fill";
export const id="dl_14b267349b7897e167e2";
export const url=new URL("../icons/workspace_premium-fill.svg?v=816f4348633b9d0c9b0eeb9e8840a8a3dc6e53b5bf9c65ce0bc07cccb45d05e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
