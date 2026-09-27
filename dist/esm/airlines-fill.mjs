export const name="airlines-fill";
export const id="dl_4ac54bfa5ffa47816423";
export const url=new URL("../icons/airlines-fill.svg?v=d64f7843e57d5da7866e84f56bf20d5de3b55036284925fe66a5088a34d188da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
