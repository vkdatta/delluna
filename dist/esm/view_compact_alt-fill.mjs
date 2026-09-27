export const name="view_compact_alt-fill";
export const id="dl_acdfda9e7a96b6026097";
export const url=new URL("../icons/view_compact_alt-fill.svg?v=b6c4f6fcf110f6485e4e184fe67f878d1d0408c9e9b777f46c79b1966d578c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
