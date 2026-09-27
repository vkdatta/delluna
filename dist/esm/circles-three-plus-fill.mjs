export const name="circles-three-plus-fill";
export const id="dl_aea51acd77dc43e782e5";
export const url=new URL("../icons/circles-three-plus-fill.svg?v=7d108100b75621ea7ff1130f0def3b0cb8413036fd9472dbbe3205a62552de83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
