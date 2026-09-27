export const name="text-t-light";
export const id="dl_fa02f54f7f3ad689e8fa";
export const url=new URL("../icons/text-t-light.svg?v=e9b9de5c81edc0a2d359bf1e7a40f10df96ee4d84a082ea23d97f0f9b307454b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
