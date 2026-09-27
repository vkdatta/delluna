export const name="add_row_above-fill";
export const id="dl_5cc75c6a87149ba7660c";
export const url=new URL("../icons/add_row_above-fill.svg?v=da78db08f7825c4143f912054a148b9968c6dc1b437915e92501cea04bbb4e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
