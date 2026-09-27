export const name="replit-logo-duotone";
export const id="dl_611e011dd1e64f9791fb";
export const url=new URL("../icons/replit-logo-duotone.svg?v=bf83051f5559a90d3037e1b7f1772401b1c2a1feaed5b28a37201c0982d29e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
