export const name="scan-smiley";
export const id="dl_0ce26db9fed266ab67ab";
export const url=new URL("../icons/scan-smiley.svg?v=89a8be0bd980d723a0df46e4b71baf47e65f15b1da1cb04d568ae5cb23580fa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
