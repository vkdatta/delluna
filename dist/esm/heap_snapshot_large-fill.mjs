export const name="heap_snapshot_large-fill";
export const id="dl_5ca4ec81ec34ebf1e956";
export const url=new URL("../icons/heap_snapshot_large-fill.svg?v=0af34231579efcc782dec4db096644a53aedb875a254c2fbd8526b003a528915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
