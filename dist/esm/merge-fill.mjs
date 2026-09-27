export const name="merge-fill";
export const id="dl_fcd0495021e0f5f4b8a3";
export const url=new URL("../icons/merge-fill.svg?v=d5d647aa91f9dbc44e26b69f14b9786b60f443b64f6dbcb2d860e12c587c1454",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
