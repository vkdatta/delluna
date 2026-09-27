export const name="toilet-paper-duotone";
export const id="dl_edad8e8516277cb9f389";
export const url=new URL("../icons/toilet-paper-duotone.svg?v=b97a7292708bc0642371c9050d87b869df6046ba5c17efd278ac86e865dd16b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
