export const name="assistant_device-fill";
export const id="dl_461cf808573c5a5f4596";
export const url=new URL("../icons/assistant_device-fill.svg?v=4945ef96975f962af0d13580b35c3b26295225580bcf3e365c3a033ac5f3d018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
