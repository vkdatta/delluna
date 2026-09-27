export const name="x-circle-light";
export const id="dl_7a9a5180af655497943c";
export const url=new URL("../icons/x-circle-light.svg?v=3dd960bb953755df70b4030163afb0009d913bfc2f420e77501a67cf5e49bdcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
