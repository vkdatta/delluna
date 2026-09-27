export const name="nest_display_max-fill";
export const id="dl_544a846146b144b7662b";
export const url=new URL("../icons/nest_display_max-fill.svg?v=00b64d1ac193adf29f8e543126ce059ac67e716e575408c596cc3cacd8204e6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
