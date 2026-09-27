export const name="vault";
export const id="dl_c4b593a6306144c38da6";
export const url=new URL("../icons/vault.svg?v=dd7db85997108297f39491a3ecb26ff048448ca5b957bf90ce34468adb55ba96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
