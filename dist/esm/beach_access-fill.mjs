export const name="beach_access-fill";
export const id="dl_5091159a8314fb17dbee";
export const url=new URL("../icons/beach_access-fill.svg?v=0f73921112317f9f074f2a86c4d59ca898401e8b5c3e4be86d0a21faee071602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
