export const name="glucose";
export const id="dl_b2ff53c52e3f41d7901b";
export const url=new URL("../icons/G/glucose.svg?v=5cc65c306114edf5d2315db1e37394f61a3468301bc266c28876a46752ec36b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
