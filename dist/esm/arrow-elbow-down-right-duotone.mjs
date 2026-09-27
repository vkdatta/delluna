export const name="arrow-elbow-down-right-duotone";
export const id="dl_ede73f7a7ebf40dc9393";
export const url=new URL("../icons/arrow-elbow-down-right-duotone.svg?v=36533cb4f40f430b47532e125aa9753d4d67374136693f6011b39fd675ef3256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
