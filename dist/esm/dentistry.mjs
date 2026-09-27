export const name="dentistry";
export const id="dl_d136c15a898ad86e427a";
export const url=new URL("../icons/dentistry.svg?v=a8023a3f01cbd4780451722552314407dc91bcf1878af96b322e31d708f03590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
