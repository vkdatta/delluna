export const name="squares-four-light";
export const id="dl_be6246b6bcad4b158dc0";
export const url=new URL("../icons/S/squares-four-light.svg?v=ee7c387692cd3d2d6029dd3dc1f94a7bc7502e00ecc3a85e73daefd9fd382629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
