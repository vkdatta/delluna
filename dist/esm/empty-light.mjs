export const name="empty-light";
export const id="dl_ff445b393fec423fbd99";
export const url=new URL("../icons/empty-light.svg?v=03eb95b802aea98f55b2f743582499ac25714b7789116cbe55910cd0122fa63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
