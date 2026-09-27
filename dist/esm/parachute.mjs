export const name="parachute";
export const id="dl_c7c2afd28e5446a1bc8a";
export const url=new URL("../icons/parachute.svg?v=11d9bddb6c4f3bbcafa4059be156c22e6c6191c1feaeec3fdaffac1dd26b2180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
