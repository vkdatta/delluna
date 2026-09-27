export const name="funnel-x-thin";
export const id="dl_086a514135644ce6b5a0";
export const url=new URL("../icons/funnel-x-thin.svg?v=1b8267a0ea777fc1b2ecd850596b819d27d2e5dfc4039140052fb44cf4b49c79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
