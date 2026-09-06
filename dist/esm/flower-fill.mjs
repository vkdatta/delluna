export const name="flower-fill";
export const id="dl_c42d57bac35d4b44b62c";
export const url=new URL("../icons/flower-fill.svg?v=2b3e44f333d8d2f643d54616174adbaad6fbd31b25d4eb6dd5225adb0fc31111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
