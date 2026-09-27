export const name="battery-charging-duotone";
export const id="dl_397782cf161543b3bff6";
export const url=new URL("../icons/battery-charging-duotone.svg?v=0c24781b02d5f0419bfc4c18482c9ad2185c22f69ac46413793062ec5f17da42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
