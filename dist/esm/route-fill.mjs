export const name="route-fill";
export const id="dl_52cbed071138cfc92da6";
export const url=new URL("../icons/route-fill.svg?v=40fe09e5c1bbda977a88dbb8f1d1171d80ebf540195b59ebbbd80b0676e0a8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
