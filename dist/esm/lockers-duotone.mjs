export const name="lockers-duotone";
export const id="dl_56e3ba85130340419125";
export const url=new URL("../icons/lockers-duotone.svg?v=8c01588d950f1d0ccfa14c15ef7caed588cef9b746461c0e392ce22de6b396cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
