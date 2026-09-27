export const name="lucid_3-move-vertical";
export const id="dl_2b6e78926ee7493ebe6f";
export const url=new URL("../icons/lucid_3-move-vertical.svg?v=ddaf949ee88a66850ce7b02b7da59a3cf855de3849bc4035600ad2c576954c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
