export const name="lucid_2-file-minus";
export const id="dl_bf57b22802db4e97a043";
export const url=new URL("../icons/lucid_2-file-minus.svg?v=5cbfe44814a14144f08a8e2f2bf41662ae69e1fa9e67f54b48d60f927b6d62ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
