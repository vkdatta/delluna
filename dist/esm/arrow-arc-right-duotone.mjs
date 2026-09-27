export const name="arrow-arc-right-duotone";
export const id="dl_f0404604b2754c679618";
export const url=new URL("../icons/arrow-arc-right-duotone.svg?v=54ee8f7d1d8483827f577be1fb881ffb33b288ee68031577e35ae2328000ce6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
