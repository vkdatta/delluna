export const name="tipi-bold";
export const id="dl_cde8c39cc2bba6eb04e0";
export const url=new URL("../icons/tipi-bold.svg?v=e71e6e61a984d1851a3b4eb1ba2ee6b991ba148e2a1961393f36e8b6b3cbf4f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
