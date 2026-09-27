export const name="radio-duotone";
export const id="dl_907b439f09134120993a";
export const url=new URL("../icons/radio-duotone.svg?v=99036ea4f943808f1759e3d503b486b255e935c69d6605a96bdf82d47b3c6dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
