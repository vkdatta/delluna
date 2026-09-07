export const name="arrow-circle-up-left-duotone";
export const id="dl_be957132148c4334b731";
export const url=new URL("../icons/arrow-circle-up-left-duotone.svg?v=616acafd24003dc395019801c848bd4b2ad34b025d3302d554fe9760b9141b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
