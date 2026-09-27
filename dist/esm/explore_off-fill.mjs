export const name="explore_off-fill";
export const id="dl_e4723d07f00e2b0a2ef9";
export const url=new URL("../icons/explore_off-fill.svg?v=53aaa7458c0114164fb67676ba629a52b6c728fa1849db69650e366865ce8749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
