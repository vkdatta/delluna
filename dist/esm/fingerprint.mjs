export const name="fingerprint";
export const id="dl_1c35151091ef4b978104";
export const url=new URL("../icons/fingerprint.svg?v=e43cd5f94912b34c3d0aa943530624317a27bc528cee3344cbeb75350e02c65c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
