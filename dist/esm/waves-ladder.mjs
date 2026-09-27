export const name="waves-ladder";
export const id="dl_13529ff48cd94e9d894c";
export const url=new URL("../icons/waves-ladder.svg?v=5872ed2db305911f35d441c6645a631d6a440b54f30014286d9f12c4fd1e32fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
