export const name="hand-arrow-down-duotone";
export const id="dl_c2f7f659529c423d913d";
export const url=new URL("../icons/hand-arrow-down-duotone.svg?v=9ad74cfb543c4d5c31953d0105a81734461a06f117f8293883fac13022adac36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
