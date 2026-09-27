export const name="bucket_check-fill";
export const id="dl_6268905ca77316760f27";
export const url=new URL("../icons/bucket_check-fill.svg?v=1c35455125f8624966c446d362bdf4b71524b33483592fd11dabf8ddd5d9a66f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
