export const name="burst_mode";
export const id="dl_4f3e46f9cc36b8bde596";
export const url=new URL("../icons/burst_mode.svg?v=f3fa0e4b984ebea79292c4494bd1830ab1f3faacff7ae128a8fc611b843c8936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
