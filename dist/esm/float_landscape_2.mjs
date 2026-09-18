export const name="float_landscape_2";
export const id="dl_422a5a6819b547b781c4";
export const url=new URL("../icons/float_landscape_2.svg?v=a4a2d27599886ce1fe60cfde766a5a74044f8bad39e9d11dc734ff0c59311da5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
