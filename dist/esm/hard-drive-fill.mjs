export const name="hard-drive-fill";
export const id="dl_f4962c8899454dc7a69d";
export const url=new URL("../icons/hard-drive-fill.svg?v=489a643b942b5aa52ae5a948b6dcb62fee8090ca9d33cd5e6046c9d7cb3a6ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
