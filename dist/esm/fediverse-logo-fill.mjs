export const name="fediverse-logo-fill";
export const id="dl_828d09c0423a4b7b8844";
export const url=new URL("../icons/fediverse-logo-fill.svg?v=e62ed649be789a2e62419a45174550e84363bb4c1701b0f43e3a1e0c26f5696e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
