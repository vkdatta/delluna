export const name="gauge-duotone";
export const id="dl_9539fd5a981d4907b57a";
export const url=new URL("../icons/gauge-duotone.svg?v=8f47dd585c7eeda0d07dd82a032abee81c8e76a2e9ecfeedc24eb3455adddb22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
