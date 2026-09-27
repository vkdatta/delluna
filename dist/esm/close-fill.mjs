export const name="close-fill";
export const id="dl_0248a4a5349a30cf5675";
export const url=new URL("../icons/close-fill.svg?v=55078af8cca65956635bc6435f597b6e9c303c898ea61a819c69a7f81f20ea38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
