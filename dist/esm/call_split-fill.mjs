export const name="call_split-fill";
export const id="dl_1a58c2d6a1ce5c0c7b2c";
export const url=new URL("../icons/call_split-fill.svg?v=e3c68cc4a3fdd8198a0b1ceedb10c3e661816ed624816479786726e66e8d9a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
