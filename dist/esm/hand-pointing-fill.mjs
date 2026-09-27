export const name="hand-pointing-fill";
export const id="dl_7340043cd5504c65b679";
export const url=new URL("../icons/hand-pointing-fill.svg?v=d8f94cf4ff40f10d36685167cfb5b671c72598c667e02e7197f9730a4d7cf5be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
