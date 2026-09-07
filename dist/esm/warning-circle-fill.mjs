export const name="warning-circle-fill";
export const id="dl_e78cf83dcbde4270851a";
export const url=new URL("../icons/W/warning-circle-fill.svg?v=29199dd3ff20a7fc36380dc366c9004fafa98d979649dc2311c5b1f8fd968dac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
