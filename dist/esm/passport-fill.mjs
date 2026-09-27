export const name="passport-fill";
export const id="dl_20bef9d2751b75ee8c56";
export const url=new URL("../icons/passport-fill.svg?v=f61c3fe44f2313ff53bccfa22b66cc8bd0da62d7819cd22b85e2957b7744eafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
