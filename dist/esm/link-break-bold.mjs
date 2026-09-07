export const name="link-break-bold";
export const id="dl_219cd4dee4144568afcc";
export const url=new URL("../icons/link-break-bold.svg?v=1ec00dc9fbd9b19be698c1575719123f509fe214b972ea49d544d87b76967afc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
