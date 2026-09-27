export const name="coda-logo-light";
export const id="dl_254b5a3269644cd08816";
export const url=new URL("../icons/coda-logo-light.svg?v=3cef3e6b614e0de5124cc1a42d18024df41b869dbd62aa901163cb9f09bb8129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
