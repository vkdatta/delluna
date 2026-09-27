export const name="minimize-fill";
export const id="dl_7ba6ec697c2c37be79fa";
export const url=new URL("../icons/minimize-fill.svg?v=d901235a19541e905b3a03342d83fa5fe383b059b4ba8b19b357588256fd70fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
