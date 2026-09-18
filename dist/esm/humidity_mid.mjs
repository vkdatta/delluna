export const name="humidity_mid";
export const id="dl_06640acf12994eb281ab";
export const url=new URL("../icons/humidity_mid.svg?v=8e9e6f3ccf02bf5a9a4c140b6c6e0ce9610afae2b7948390272da383ca9c992b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
