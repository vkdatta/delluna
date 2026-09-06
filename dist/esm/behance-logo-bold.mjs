export const name="behance-logo-bold";
export const id="dl_cc79558ab4bd4d878e24";
export const url=new URL("../icons/behance-logo-bold.svg?v=5f16985791dd5bc3be4391f943dd81699d28129053306dc5673a82a75b4d8dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
