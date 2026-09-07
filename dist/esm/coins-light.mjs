export const name="coins-light";
export const id="dl_7f61df66208d45c0b6f6";
export const url=new URL("../icons/coins-light.svg?v=b5492803823765d37613a17eb44ed843c8e1346fe06aa3aaec87cb8a75bf003a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
