export const name="fast-forward-circle-light";
export const id="dl_0fb6cd41ec564eefad39";
export const url=new URL("../icons/fast-forward-circle-light.svg?v=a15ea98e170565ce205f52782849ed26631288e9b3d13854a2835eb16c940852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
