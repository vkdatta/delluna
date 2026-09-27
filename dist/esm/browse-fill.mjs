export const name="browse-fill";
export const id="dl_5226695eee40ed6019af";
export const url=new URL("../icons/browse-fill.svg?v=92efe0a327953312a0b2c38828fbb43d0ff2897abcca56bfdfca19a876ae27df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
