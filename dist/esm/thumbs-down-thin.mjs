export const name="thumbs-down-thin";
export const id="dl_c82c37bff6fb2228c933";
export const url=new URL("../icons/thumbs-down-thin.svg?v=21f20eb6a840d4b72f8d83dc542c2af3ac2afab605b2ff29be1163f5a66cebfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
