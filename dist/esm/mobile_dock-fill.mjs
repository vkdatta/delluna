export const name="mobile_dock-fill";
export const id="dl_db00684f461cef36d4c6";
export const url=new URL("../icons/mobile_dock-fill.svg?v=fa8cd8a71f3201a9c792526e355deefc38163a54eadeae3a591207eb9893400a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
