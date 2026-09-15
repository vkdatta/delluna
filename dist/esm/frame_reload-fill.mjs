export const name="frame_reload-fill";
export const id="dl_16884c3d2b3349c4969f";
export const url=new URL("../icons/F/frame_reload-fill.svg?v=95c8d62d75329e498af74123b4ecea76ebb20f6f6471a50686f8d23139a78bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
