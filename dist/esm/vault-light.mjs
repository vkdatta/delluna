export const name="vault-light";
export const id="dl_929b70f77a5dc57c5c1a";
export const url=new URL("../icons/vault-light.svg?v=3fb2e5933241cdf8dd6daf44e80cdaa9f226924b728c9b625ad9c10083eafb2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
