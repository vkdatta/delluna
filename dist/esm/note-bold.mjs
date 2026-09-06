export const name="note-bold";
export const id="dl_3634c037ea90455d8c0a";
export const url=new URL("../icons/note-bold.svg?v=a324ac1e1707e7a74a9595314f4e0eda1223beb808c62ff7d9e20d5684c65130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
