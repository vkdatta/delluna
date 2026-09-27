export const name="respiratory_rate-fill";
export const id="dl_51d348a92e11b4a8a5ac";
export const url=new URL("../icons/respiratory_rate-fill.svg?v=31fccd7a85efc0d6460e6d2d005593db429698981416dec3353188ec311029db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
