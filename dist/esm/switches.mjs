export const name="switches";
export const id="dl_9d677af786523dacc39a";
export const url=new URL("../icons/switches.svg?v=4e9dc4110f77749942740022a46c30fe576ab417283846704d5870611754e345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
