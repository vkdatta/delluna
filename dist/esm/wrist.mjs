export const name="wrist";
export const id="dl_77c063eb6f6b3214b0a6";
export const url=new URL("../icons/wrist.svg?v=1310cf7b134c52bdfa279b0abf7dfffd2bc15848310c2694f3d971c83a6363ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
