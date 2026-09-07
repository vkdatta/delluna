export const name="bug-droid-duotone";
export const id="dl_c92138511d3b430a9dc6";
export const url=new URL("../icons/bug-droid-duotone.svg?v=82586e0cd067e0a6a508db5b2e0da64cb4a320ce38e55e4de6ba8a5784ad560d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
