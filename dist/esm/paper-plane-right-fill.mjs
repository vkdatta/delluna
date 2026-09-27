export const name="paper-plane-right-fill";
export const id="dl_44b8fc229ada4cc2b865";
export const url=new URL("../icons/paper-plane-right-fill.svg?v=e6c04e8cf80421fccb27bae48791803b9898e950a47037680e1ac00a46203d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
