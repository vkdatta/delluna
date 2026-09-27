export const name="broadcast_on_personal";
export const id="dl_7e1e77e26857acf0884b";
export const url=new URL("../icons/broadcast_on_personal.svg?v=dc1554059a9735578e33abac764c68820768d9f875c4eea62f7c0729e8b9613c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
