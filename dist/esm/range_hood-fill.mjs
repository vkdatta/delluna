export const name="range_hood-fill";
export const id="dl_4fcfc7e99e184e2f88d2";
export const url=new URL("../icons/range_hood-fill.svg?v=87707c896dd3f3c1b746fb0aedc43a6d839f65b4382e6a300c90d56ab1e93e46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
