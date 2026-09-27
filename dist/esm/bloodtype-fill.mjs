export const name="bloodtype-fill";
export const id="dl_4d24e15093e96afdd17c";
export const url=new URL("../icons/bloodtype-fill.svg?v=0aaa1d34affef4525fa42271a24d52133d15c9801d52cc6e2e2273875b730d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
