export const name="glucose";
export const id="dl_57df6d6d2759a41cb705";
export const url=new URL("../icons/glucose.svg?v=5cc65c306114edf5d2315db1e37394f61a3468301bc266c28876a46752ec36b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
