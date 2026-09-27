export const name="clipboard-text-duotone";
export const id="dl_aa74eaa4848645b4bf3f";
export const url=new URL("../icons/clipboard-text-duotone.svg?v=f076283f2bf6b92d6164976090c0bcc2d1ac2ecdbd1bea1a02482ac05d56ef20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
