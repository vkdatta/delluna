export const name="warehouse-fill";
export const id="dl_b808d0085de59f24a684";
export const url=new URL("../icons/warehouse-fill.svg?v=b151ce91cf7b16ad609bd07df13d106701324117e61106e4f0ea97e4a290fc12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
