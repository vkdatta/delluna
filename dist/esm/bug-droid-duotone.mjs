export const name="bug-droid-duotone";
export const id="dl_c92138511d3b430a9dc6";
export const url=new URL("../icons/bug-droid-duotone.svg?v=1736a39b5e94e9039455f91dbf2e85fcafdd93e5ec1e5864df4957200f9114df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
