export const name="graphics-card-fill";
export const id="dl_381529596a9f42a08525";
export const url=new URL("../icons/graphics-card-fill.svg?v=51e5252a0df6f1bceb3d60be289d7bae13502bf62d2fedf2730e5c590c636827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
