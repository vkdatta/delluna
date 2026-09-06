export const name="patreon-logo-fill";
export const id="dl_51862c4c738c4c9897fd";
export const url=new URL("../icons/patreon-logo-fill.svg?v=8a078eb292a3d0b437bb87a0797f02b808458f2704ff046ee53c78a179ec4b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
