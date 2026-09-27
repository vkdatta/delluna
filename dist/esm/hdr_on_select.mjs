export const name="hdr_on_select";
export const id="dl_1af63ad757b76e8a0a3d";
export const url=new URL("../icons/hdr_on_select.svg?v=86df836f9aad60115930a176cdc5f26c23ec9e4103dbda64090439752ebd9348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
