export const name="google-drive-logo-fill";
export const id="dl_0a2675be9b544adda7f0";
export const url=new URL("../icons/google-drive-logo-fill.svg?v=b3832390f271c7c42620b34fa13baf60dc43ccd94399d728a55f7cbf4e5040dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
