export const name="tv_remote";
export const id="dl_47c37272d88c43caa7fb";
export const url=new URL("../icons/T/tv_remote.svg?v=dcb2c3bdba079ba8661f8fee1cf7c897c5743438a2d1e5f574acaef91febf704",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
