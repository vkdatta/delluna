export const name="enable-fill";
export const id="dl_4188d542120a19a350b0";
export const url=new URL("../icons/enable-fill.svg?v=de349d2042b792dc571776f376988522bf60ae3401828874d7b30cbbb0c25f7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
