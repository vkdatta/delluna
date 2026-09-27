export const name="bezier-curve-thin";
export const id="dl_27d61ebe39944f86a7b8";
export const url=new URL("../icons/bezier-curve-thin.svg?v=d7992f06b8a7908f3b1de26efe816c1f48760e6acc7231b90715afae1744e95b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
