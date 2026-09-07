export const name="square-half-bottom";
export const id="dl_a240632a9ca2482eb10f";
export const url=new URL("../icons/S/square-half-bottom.svg?v=f4c16ce9517a3cca1e95c0f9d0a79458bbc781d6714ae539163efbbf3bb090f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
