export const name="assistant_direction-fill";
export const id="dl_ee933663f2e7f43ed887";
export const url=new URL("../icons/assistant_direction-fill.svg?v=7f16f54ab10c292b1efda36a60cfae89376fdc2002bf64703ef9b572ddfa2690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
