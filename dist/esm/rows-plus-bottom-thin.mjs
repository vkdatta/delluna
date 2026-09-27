export const name="rows-plus-bottom-thin";
export const id="dl_2a6d6265df124663b16a";
export const url=new URL("../icons/rows-plus-bottom-thin.svg?v=1e6d55d2ddec0bbe5009d93d6d7cb2275ce28b5cc1d30c156951e2beb118d7ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
