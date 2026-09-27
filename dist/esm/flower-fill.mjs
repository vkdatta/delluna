export const name="flower-fill";
export const id="dl_c42d57bac35d4b44b62c";
export const url=new URL("../icons/flower-fill.svg?v=b5696b88e2e0d56aae35f67fd47ea83fe99aa39063e12ce1876704248afdf079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
