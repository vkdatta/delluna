export const name="google-play-logo-fill";
export const id="dl_b488bca29f3b4d64b360";
export const url=new URL("../icons/google-play-logo-fill.svg?v=805c6acbcab5ff5cb5df42dbb828e31db55a0279020a05a1e8d6e69cf79f02be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
