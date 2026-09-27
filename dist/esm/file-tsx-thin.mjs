export const name="file-tsx-thin";
export const id="dl_512b9f68372f416fb827";
export const url=new URL("../icons/file-tsx-thin.svg?v=c3cb11c64fc563677e99e5151940caec1c2cd01ada2926a3451c144945306a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
