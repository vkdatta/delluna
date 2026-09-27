export const name="graph-thin";
export const id="dl_18681c065f1e4e848100";
export const url=new URL("../icons/graph-thin.svg?v=2158abf017bbcba8c73b96a1a8d4d1270944eb784bd45d23ff99e38ec8dbaaae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
