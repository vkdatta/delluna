export const name="outbound";
export const id="dl_75914cccfabf410acaa1";
export const url=new URL("../icons/outbound.svg?v=c4df6c443d9fe471f523aabbd21a3acf814bba19791596d2722d65f181a10a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
