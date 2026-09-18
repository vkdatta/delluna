export const name="4k_plus-fill";
export const id="dl_14be91ae76f74331a6ff";
export const url=new URL("../icons/4k_plus-fill.svg?v=5148e9870d0820215dd0e1e7faf2579042a91839c35376d949c65094df2451cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
