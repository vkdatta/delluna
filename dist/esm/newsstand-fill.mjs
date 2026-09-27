export const name="newsstand-fill";
export const id="dl_7cb32da406de2b370087";
export const url=new URL("../icons/newsstand-fill.svg?v=935bb1960a94757ad8054146272a3500b594e5fe4d2aadae35f7793a6b6e9dde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
