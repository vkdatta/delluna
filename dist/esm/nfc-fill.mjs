export const name="nfc-fill";
export const id="dl_41aaa5cd2750c0117947";
export const url=new URL("../icons/nfc-fill.svg?v=aa6a6c2f506a1a1c1f6b6cdc47a2e992f7f87361cd16c7e07bcf8b8c5d6a073c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
