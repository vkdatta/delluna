export const name="hand-coins-fill";
export const id="dl_2485bbf36bda409bb24c";
export const url=new URL("../icons/hand-coins-fill.svg?v=c6a9f43a04fe5e85949366a6a3189200bf133981e503c17cd5e38b6d8ae6821b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
