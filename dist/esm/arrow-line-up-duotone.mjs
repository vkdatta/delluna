export const name="arrow-line-up-duotone";
export const id="dl_ae237a90555e42fb846c";
export const url=new URL("../icons/arrow-line-up-duotone.svg?v=69fca321458606804cbc2c6ebba51a571118914852a12119f1af396ca2d69fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
