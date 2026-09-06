export const name="images-square-duotone";
export const id="dl_9b7a0891c619423ea4f0";
export const url=new URL("../icons/images-square-duotone.svg?v=bfcff5f57ec323566efaedb87fde1ecdb59a18cd554697d82a36cbacf619b70a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
