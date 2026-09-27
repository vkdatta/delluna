export const name="lucid_3-map-pin-x";
export const id="dl_70381fb2553242c090bc";
export const url=new URL("../icons/lucid_3-map-pin-x.svg?v=fd7ef63a6677631513c98af642b61d73628374a16b08d2d0a84e8d31c45dfdd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
