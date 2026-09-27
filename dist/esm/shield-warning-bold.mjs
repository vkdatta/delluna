export const name="shield-warning-bold";
export const id="dl_b72ec7e8cabe10c996b1";
export const url=new URL("../icons/shield-warning-bold.svg?v=cc07ecd53691930d5b66903d85102dd0bd2783cc86dd555ab00f782289496c1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
