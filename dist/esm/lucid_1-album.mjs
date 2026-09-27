export const name="lucid_1-album";
export const id="dl_fa97c99d8091423586ad";
export const url=new URL("../icons/lucid_1-album.svg?v=e55d87bb719dcb1e5c8f060a1fafbb0133f094b10157350e1f867bd6bf242c8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
