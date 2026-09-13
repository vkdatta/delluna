export const name="3g_mobiledata";
export const id="dl_f58ccb6aad434e4a87c3";
export const url=new URL("../icons/3/3g_mobiledata.svg?v=ace2944d493e48383d31489908434ea90bcae102fa1b3615d65a2b72a0c77ccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
