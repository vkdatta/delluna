export const name="lucid_3-rocking-chair";
export const id="dl_64cc2fa125d24f6783ee";
export const url=new URL("../icons/lucid_3-rocking-chair.svg?v=966f826db1d0dbc26c59b40410bc3f4cce5aba63f6ad94936c97874f20df26db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
