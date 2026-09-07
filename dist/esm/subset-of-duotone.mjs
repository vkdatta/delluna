export const name="subset-of-duotone";
export const id="dl_7ddecd31f00a4ad89534";
export const url=new URL("../icons/S/subset-of-duotone.svg?v=334305b8d22f80f9dcb2d98da49e3f83d88dc5a7e2e260eb6a881ba2bbd0b289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
