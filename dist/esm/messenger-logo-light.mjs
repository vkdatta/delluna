export const name="messenger-logo-light";
export const id="dl_91b2cd5d4c964f638c16";
export const url=new URL("../icons/messenger-logo-light.svg?v=9d55599593ebf9e630f9ff423dea79950801371bef686cb66bc16f813ac65bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
