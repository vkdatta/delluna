export const name="no_encryption";
export const id="dl_22d8f0487ddc3fc138cc";
export const url=new URL("../icons/no_encryption.svg?v=c3a68037bd8d6b4db93e1a17ee83a3fc78af0fc811862ad8ea64a828cde49904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
