export const name="art_track-fill";
export const id="dl_0f4df185ba7e43be8779";
export const url=new URL("../icons/A/art_track-fill.svg?v=44919b985f84fbf67633b5c2fcf78c46ba1fd5294c2eb62c0cd7aea1aa574b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
