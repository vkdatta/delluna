export const name="share-fat-light";
export const id="dl_9f0f84885d644274eeb3";
export const url=new URL("../icons/share-fat-light.svg?v=60a6d29a15bebfe204d1f8b2a328b5b40a21fbd582418aaae2011b1b0dc81cc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
