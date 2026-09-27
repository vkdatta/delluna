export const name="delete-fill";
export const id="dl_967f2b55d6c9a8f3e578";
export const url=new URL("../icons/delete-fill.svg?v=6697c04abae64dca124ed14cdc53ccb09e5f805f80bb524f937f2793bf2e4976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
