export const name="lucid_1-brain";
export const id="dl_a0eede7531f34e8a8ad9";
export const url=new URL("../icons/lucid_1-brain.svg?v=264eae046aecf71e1862bb753401b7ea5be37156bcfa5fbc9b707761697096be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
