export const name="umbrella-simple-light";
export const id="dl_c6519fd8b4c1f25f4278";
export const url=new URL("../icons/umbrella-simple-light.svg?v=8d5ccc2887088dcfa80204fe2955f526049aef4d442aaf6360a5acc45723ef62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
