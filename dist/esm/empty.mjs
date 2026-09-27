export const name="empty";
export const id="dl_826e56c3578549ad88fe";
export const url=new URL("../icons/empty.svg?v=6e2b0bb55196385dcf06c1b7332bcaa4d176114a23d6b4d2a390a21b5f540a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
