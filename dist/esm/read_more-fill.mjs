export const name="read_more-fill";
export const id="dl_d46b258396456b47ee9e";
export const url=new URL("../icons/read_more-fill.svg?v=100435d516e8cd87127290c15bf2cc7bfdcb2b583e400ad4107e7fbd67870c2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
