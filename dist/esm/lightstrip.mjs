export const name="lightstrip";
export const id="dl_ddf0bd833dd644f18d32";
export const url=new URL("../icons/lightstrip.svg?v=e5cea7717551f624f66c0e07783d03780a51285eb36c6949e516c69840d00bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
