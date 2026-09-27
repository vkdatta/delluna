export const name="line-segments";
export const id="dl_39a5ea9d64c8470a9b05";
export const url=new URL("../icons/line-segments.svg?v=b99c8614bbe6987bad43801605bc2ab2b44b60d9a2c933fe7b571050979927d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
