export const name="spinner-gap";
export const id="dl_d2f65aaf20c247d9a6f3";
export const url=new URL("../icons/S/spinner-gap.svg?v=c6cd667951de0c9a64e1831e11866b51f8af9b2da56623f58634f3448fb450cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
