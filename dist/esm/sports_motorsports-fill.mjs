export const name="sports_motorsports-fill";
export const id="dl_fc903fad0715e72c8a4a";
export const url=new URL("../icons/sports_motorsports-fill.svg?v=c1f9eadd3aa9e947bc3c940c4ba45ea937b387e84806a0aadc71aff40b81b763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
