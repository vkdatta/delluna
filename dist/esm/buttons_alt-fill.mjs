export const name="buttons_alt-fill";
export const id="dl_ca8ff36d580af4cd2565";
export const url=new URL("../icons/buttons_alt-fill.svg?v=afbfd39eee94110fd3d1321078be171a979f97cff2896ebb1d4bd411d53e5db0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
