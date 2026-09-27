export const name="list_2-fill";
export const id="dl_f57a2e750a864817a20c";
export const url=new URL("../icons/list_2-fill.svg?v=6e30c216fd8a5d4a2e2ae60f8a8b14abda384d0734bdb7e36781ae3e62f9ad9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
