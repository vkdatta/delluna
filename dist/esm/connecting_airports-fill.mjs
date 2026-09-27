export const name="connecting_airports-fill";
export const id="dl_93ba40f8268aaaa44761";
export const url=new URL("../icons/connecting_airports-fill.svg?v=6db761904bbac2887621068d7a8bcbc243cc56408e8a537e98a662f5e4913fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
