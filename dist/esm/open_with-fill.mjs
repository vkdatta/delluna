export const name="open_with-fill";
export const id="dl_8b65174bd2a4cb767db6";
export const url=new URL("../icons/open_with-fill.svg?v=22fb96346b18e78a60dca4dea36580b559956ff0acda63be00863ab67e1a09e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
