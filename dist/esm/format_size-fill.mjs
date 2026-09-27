export const name="format_size-fill";
export const id="dl_3dc8b011c55c6ddd62f2";
export const url=new URL("../icons/format_size-fill.svg?v=875344eced6b13521e2cb4585ec4c7b5bd3e41cfd844c4241d38a8f4d704050f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
