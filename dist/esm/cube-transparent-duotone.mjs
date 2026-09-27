export const name="cube-transparent-duotone";
export const id="dl_700e254ac2b94874a424";
export const url=new URL("../icons/cube-transparent-duotone.svg?v=406b981483b63478baa8096bbdacbef57699da012e85bac4b1a1438607826086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
