export const name="number-five-bold";
export const id="dl_9d026d0d8d5d4643b2b5";
export const url=new URL("../icons/number-five-bold.svg?v=f517f7286e7b13533ef8bfaf441a04166af9c1b0789e4018caad10d5d56d2215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
