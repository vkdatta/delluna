export const name="brightness_auto-fill";
export const id="dl_e128325f3060dff3cad6";
export const url=new URL("../icons/brightness_auto-fill.svg?v=fd3441ae000af4e077411e5ec91b61a2300ba1b1b9d556deed9a788222800cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
