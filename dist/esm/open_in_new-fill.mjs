export const name="open_in_new-fill";
export const id="dl_136825ad0fa4bdf30be5";
export const url=new URL("../icons/open_in_new-fill.svg?v=42557717ba948c1968e5c0f3b772b40b34302d055a1d60dd340c0bcaf1481ba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
