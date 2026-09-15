export const name="cast_connected-fill";
export const id="dl_ad8a3a51dae1407382ce";
export const url=new URL("../icons/C/cast_connected-fill.svg?v=1f55bd8cb46e2d0152e63dd2104766b8d83751d6c89364a748ce9bed9a638606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
