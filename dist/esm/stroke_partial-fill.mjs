export const name="stroke_partial-fill";
export const id="dl_fea6e5fa958c68d1ab8b";
export const url=new URL("../icons/stroke_partial-fill.svg?v=4ade0006def964dc2d25c6eed402b28f61f19143f58e092c4a3c797ccc5a5a6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
