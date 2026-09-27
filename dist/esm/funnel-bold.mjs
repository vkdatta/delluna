export const name="funnel-bold";
export const id="dl_ae96a5e1ba3a46d9b180";
export const url=new URL("../icons/funnel-bold.svg?v=f8723f8b55053f013931a68346626c00346a9b1cd72a32f059c77d821466de92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
