export const name="window_closed-fill";
export const id="dl_6fb09f2876bb4c0cacf0";
export const url=new URL("../icons/window_closed-fill.svg?v=7a74c84e15186a44e1a20652d5e9d027ed301d175c85d7fdda01cca83128d516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
