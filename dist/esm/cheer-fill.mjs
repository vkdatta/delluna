export const name="cheer-fill";
export const id="dl_3bc498e878704ac8bc4e";
export const url=new URL("../icons/C/cheer-fill.svg?v=313bbd3b9ffdaddeb0b1de0f4f7c9cd0402a3050d23fd5853f82b4f6d15834de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
