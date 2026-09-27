export const name="subtitles_off-fill";
export const id="dl_cc70587a50da5ca087fe";
export const url=new URL("../icons/subtitles_off-fill.svg?v=5ccbcb7316730bf020ec8d7dabc5274af469e50f5d35790d9d91dc5828beebc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
