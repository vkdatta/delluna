export const name="google-logo-duotone";
export const id="dl_c6953072ee884c919385";
export const url=new URL("../icons/google-logo-duotone.svg?v=7453c7ae0802f10a1d4c88e72162b8d82b88ab57bc2e114784d9b3694006fc24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
