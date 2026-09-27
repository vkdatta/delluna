export const name="front_hand-fill";
export const id="dl_0a258c1505272a80e7f0";
export const url=new URL("../icons/front_hand-fill.svg?v=68a2cc9957c8651746dedec2b1d414012668da7ff871ad37383d8154442e7f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
