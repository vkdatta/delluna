export const name="codesandbox-logo-thin";
export const id="dl_e827badef3184367bd2d";
export const url=new URL("../icons/codesandbox-logo-thin.svg?v=2bb73243028542a312e1377a811419280105875eb53b1974be30c6b65fa3c25f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
