export const name="meta-logo-fill";
export const id="dl_58db70eb00ef462bb19a";
export const url=new URL("../icons/meta-logo-fill.svg?v=976a0dab605967dfa3a57c1dbc86090c2bc6d3a24eef473ac3503bc8cd4366a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
