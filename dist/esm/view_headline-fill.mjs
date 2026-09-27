export const name="view_headline-fill";
export const id="dl_ec1902c9f6b6e92174f1";
export const url=new URL("../icons/view_headline-fill.svg?v=ccc0414421187395cc30bef4a88b5571721ddfa07f0f8f6f7f442835568d3312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
