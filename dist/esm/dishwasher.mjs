export const name="dishwasher";
export const id="dl_82571ae76e54405d9f9e";
export const url=new URL("../icons/dishwasher.svg?v=5589d967c961a46754f446a58786a291de0cf0495dd6cb99726cd1452b8a3c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
