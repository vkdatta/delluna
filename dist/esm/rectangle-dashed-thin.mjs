export const name="rectangle-dashed-thin";
export const id="dl_5327b65bfe2c4c47a4d5";
export const url=new URL("../icons/rectangle-dashed-thin.svg?v=317e56588ea42cdd63dbefbe453a8c422a74f28cf0641e8c1d4325d03c031aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
