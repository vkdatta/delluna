export const name="help_center";
export const id="dl_d8f1f09fdd01c8659357";
export const url=new URL("../icons/help_center.svg?v=fe0eb98474af939b76247145d1034a2508bd20cb088aaec3dc733e7e360960e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
