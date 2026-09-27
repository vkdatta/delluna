export const name="presentation-duotone";
export const id="dl_115adb9b4ff740498e7b";
export const url=new URL("../icons/presentation-duotone.svg?v=589776b310b651b15c50e2f5e6ba2d914ba5a7c47fc5b2f7d63dbc82995173cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
