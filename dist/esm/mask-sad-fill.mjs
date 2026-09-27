export const name="mask-sad-fill";
export const id="dl_9687797b8a1346efa1a8";
export const url=new URL("../icons/mask-sad-fill.svg?v=352c0c9e902fecdfc934779a594d5aba123387b5604f96d073f7623fc85bd0ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
