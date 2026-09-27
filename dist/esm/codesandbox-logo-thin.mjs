export const name="codesandbox-logo-thin";
export const id="dl_e827badef3184367bd2d";
export const url=new URL("../icons/codesandbox-logo-thin.svg?v=948c397a25104fcc4485ab402c6183453d26ffbd6c492dcacdf63acecc192415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
