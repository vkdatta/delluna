export const name="selection-slash-fill";
export const id="dl_1f7b20b44a1444bca56b";
export const url=new URL("../icons/S/selection-slash-fill.svg?v=5c688e7b1e576fa35cb4ab20fe25f9d1130f5ba286b945d12c735c2d16797204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
