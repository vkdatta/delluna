export const name="square-pen";
export const id="dl_bfde6865c3284c9b8cec";
export const url=new URL("../icons/square-pen.svg?v=e0d42f56c4044c57e8e2a925783629176f9cbac631da41477aa5cbd6117590bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
