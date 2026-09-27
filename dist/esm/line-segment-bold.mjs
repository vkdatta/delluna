export const name="line-segment-bold";
export const id="dl_9aff12e9494c4c74b4c2";
export const url=new URL("../icons/line-segment-bold.svg?v=bc9d9c4441f0a0e1327346535574b1db7dc4a1f9248c123e2d2702b8d95d96b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
