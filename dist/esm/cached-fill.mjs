export const name="cached-fill";
export const id="dl_965279193b1c8983c7d5";
export const url=new URL("../icons/cached-fill.svg?v=735403582ff1e027deb976e888348fcd2cf2de75ff1d90b667d8296c353b3802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
