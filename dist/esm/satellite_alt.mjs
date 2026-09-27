export const name="satellite_alt";
export const id="dl_ff35e018eb9a24f7b13b";
export const url=new URL("../icons/satellite_alt.svg?v=ea8f78c056137a2feb250ee325a7f63f94d28d344dc0d9871b955b1b94a9ea85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
