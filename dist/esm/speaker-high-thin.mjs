export const name="speaker-high-thin";
export const id="dl_f418cc5a2fd13968d4f3";
export const url=new URL("../icons/speaker-high-thin.svg?v=7f3773cada7242ad3359a599c18ab5287d4f35d0ec188cee05883b0e3d174a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
