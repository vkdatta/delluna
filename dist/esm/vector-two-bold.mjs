export const name="vector-two-bold";
export const id="dl_b02854137d3243e499b0";
export const url=new URL("../icons/V/vector-two-bold.svg?v=fa410bf88c913a4d8d84e1f728f86b8f98efa05898051cfb41f3f0b9d1c88528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
