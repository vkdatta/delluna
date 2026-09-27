export const name="scan-duotone";
export const id="dl_3b19832cbb287e1b4bc7";
export const url=new URL("../icons/scan-duotone.svg?v=9a5ac237781f7222a0272a16da108ef466c3b98fa03bbe6633bb4ef34e273d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
