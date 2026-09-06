export const name="caret-double-left-thin";
export const id="dl_c866cbc9166d4cfb9a19";
export const url=new URL("../icons/caret-double-left-thin.svg?v=4e651a6e9fb540ec9736dcc1358191ac2d451692bc6bb7db254d256ac55b1ee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
