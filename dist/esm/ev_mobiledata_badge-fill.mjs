export const name="ev_mobiledata_badge-fill";
export const id="dl_f37cd8b50e3a81354c49";
export const url=new URL("../icons/ev_mobiledata_badge-fill.svg?v=fd325dc3ed18184d73b6f894b8dcce77579e86813329fbc2cb5f84a1e9c98d59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
