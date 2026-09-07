export const name="rocket-fill";
export const id="dl_1ebe319f5fd04e8aba1c";
export const url=new URL("../icons/rocket-fill.svg?v=dd88c6f79e898060c8853db5e8a777bd1fcbced752f34440a709f358c94c7bb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
