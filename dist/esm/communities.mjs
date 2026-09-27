export const name="communities";
export const id="dl_42112e5ac98e40d00366";
export const url=new URL("../icons/communities.svg?v=2c3910e010ec6228454560c8fe09a16762f05ad9a0e7b31d2e54914fc00d6cf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
