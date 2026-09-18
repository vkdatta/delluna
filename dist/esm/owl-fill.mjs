export const name="owl-fill";
export const id="dl_eee56c714b5340a3a2a4";
export const url=new URL("../icons/O/owl-fill.svg?v=341fe7de1c19794ff2e618b1e247b6f68d0de7093da5e55a32fc95f4a5884720",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
