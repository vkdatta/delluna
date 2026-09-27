export const name="bezier-curve-duotone";
export const id="dl_e670e5fbe52f4737b503";
export const url=new URL("../icons/bezier-curve-duotone.svg?v=0a13b573286aecffd2ec7fbe320ca77b64122fad4ad2b2ec9321b0a35ad72e9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
