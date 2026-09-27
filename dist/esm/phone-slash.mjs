export const name="phone-slash";
export const id="dl_e5e28d632a8242a3912a";
export const url=new URL("../icons/phone-slash.svg?v=7962b6c75ef97510ef533a380e80ca437b15936ffa76c86aba373e38aaf9bbfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
