export const name="orange-slice-fill";
export const id="dl_73d9b0db48d94f55a77b";
export const url=new URL("../icons/orange-slice-fill.svg?v=aa707364e4dbb3d3b072ef961167ed12d63266d909f094a1c6cf803bf9da500c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
