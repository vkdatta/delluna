export const name="sailboat-duotone";
export const id="dl_10d9e8e9b5d04b558362";
export const url=new URL("../icons/sailboat-duotone.svg?v=19d77b2344b8816f3ea3c37cf8a0c2f537fad21d962d90eacc88e60fc63654b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
