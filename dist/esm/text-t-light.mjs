export const name="text-t-light";
export const id="dl_e315a8fb954d1d375491";
export const url=new URL("../icons/text-t-light.svg?v=ac4f97804a04c2d3c334ed496f644a8526b3b80a80042d6ff2fb3404d082fbc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
