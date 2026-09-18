export const name="lyrics-fill";
export const id="dl_6eea01fc72444cca85f2";
export const url=new URL("../icons/lyrics-fill.svg?v=3578d11afb517e147e337ff44798e531c2f12b36f05fb01cf298746ba1d74f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
