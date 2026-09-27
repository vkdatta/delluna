export const name="format_shapes";
export const id="dl_979333d7c667e7b9864a";
export const url=new URL("../icons/format_shapes.svg?v=d5a8d4e68817efd11da3e939274ae289e3b7dea6348b5441eca628aa40bc45f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
