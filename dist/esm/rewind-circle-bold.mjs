export const name="rewind-circle-bold";
export const id="dl_a6a5148d2bc247a4a83a";
export const url=new URL("../icons/rewind-circle-bold.svg?v=b914ad61185d0ef1606e653e1e61ce44f565d14075e240079d33def0528a875f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
