export const name="hdr_on_select-fill";
export const id="dl_aa388049a357d046b4a0";
export const url=new URL("../icons/hdr_on_select-fill.svg?v=83e148f15871ed154868ef069569e54b8206771cb26e75cc492fa2158d21c8e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
