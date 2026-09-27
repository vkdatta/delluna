export const name="lucid_1-arrow-down-narrow-wide";
export const id="dl_c4b7423a4dbb49be963e";
export const url=new URL("../icons/lucid_1-arrow-down-narrow-wide.svg?v=e27cacf4fa9ae703418c267f741575ee69ce3f3ad0b64ca3f36502e16c9fe7d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
