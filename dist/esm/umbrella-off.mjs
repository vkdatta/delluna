export const name="umbrella-off";
export const id="dl_ee7352d287214f58a1d1";
export const url=new URL("../icons/umbrella-off.svg?v=e1fa5aa2d1ec89bdc3dccacf397cb9a955b324e0b2b5ea2969231b8d39388a8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
