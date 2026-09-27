export const name="mood_heart-fill";
export const id="dl_abc074622ca83bef2ddd";
export const url=new URL("../icons/mood_heart-fill.svg?v=2c8590e1794860ed587493544df9640f75e5ffd97dd99d2978071b6fd441ae7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
