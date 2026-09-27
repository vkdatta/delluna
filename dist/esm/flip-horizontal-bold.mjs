export const name="flip-horizontal-bold";
export const id="dl_c2ef463f4fb440e49d9a";
export const url=new URL("../icons/flip-horizontal-bold.svg?v=d8781668904a37640902bb86f5dc0f35932b15870a454b3cd2a7d54e45f8a8dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
