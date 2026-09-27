export const name="x-logo-thin";
export const id="dl_422f41ec398e517320c4";
export const url=new URL("../icons/x-logo-thin.svg?v=1ace40cd46c8f2d31eb63b16187f4810723dfac3bb3954ce2ceea57095082c37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
