export const name="film-slate-fill";
export const id="dl_20a2b39f03dd44599158";
export const url=new URL("../icons/film-slate-fill.svg?v=9608858cbff96ef30c946404c4b64efd6bececed9671d4a9d8f1fdad22a2d8c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
